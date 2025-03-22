import { notFound } from "next/navigation";
import blogPosts from "@/data/blog-posts.json";

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  return {
    title: post?.title ?? "Blog",
    description: post?.description ?? "Latest insights and updates.",
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) notFound();

  return (
    <main className="container mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold text-center mb-6 text-gray-900">
        {post.title}
      </h1>
      <article className="max-w-3xl mx-auto text-lg text-gray-800">
        <p>{post.content}</p>
      </article>
    </main>
  );
}
