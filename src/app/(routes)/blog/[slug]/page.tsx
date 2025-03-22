import { notFound } from "next/navigation";
import blogPosts from "@/data/blog-posts.json";

// ✅ SEO Metadata
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  return {
    title: post?.title ?? "Blog",
    description: post?.description ?? "Insights and updates on AI, Data Science, and Software Engineering.",
    openGraph: {
      title: post?.title,
      description: post?.description,
      url: `https://jasonsrobinson.com/blog/${params.slug}`,
      siteName: "Jason Robinson | Blog",
      type: "article"
    },
    twitter: {
      card: "summary_large_image",
      title: post?.title,
      description: post?.description,
    },
  };
}

// ✅ Blog Post Page Component
export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) notFound();

  return (
    <main className="container mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold text-center mb-6 text-gray-900">
        {post.title}
      </h1>
      <article className="max-w-3xl mx-auto text-lg text-gray-800 leading-relaxed">
        <p>{post.content}</p>
      </article>
    </main>
  );
}
