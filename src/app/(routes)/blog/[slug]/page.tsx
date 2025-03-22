// ✅ src/app/routes/blog/[slug]/page.tsx
import { notFound } from "next/navigation";
import { Metadata } from "next";
import blogPosts from "@/data/blog-posts.json";

interface PageProps {
  params: { slug: string };
}

// Optional: SEO metadata support
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);
  return {
    title: post?.title || "Blog Post",
    description: post?.description || "A blog post on Jason Robinson's portfolio.",
  };
}

export default function BlogPostPage({ params }: PageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) notFound();

  return (
    <main className="container mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold text-center mb-6 text-gray-900">{post.title}</h1>
      <article className="max-w-3xl mx-auto text-lg text-gray-800">
        <p>{post.content}</p>
      </article>
    </main>
  );
}
