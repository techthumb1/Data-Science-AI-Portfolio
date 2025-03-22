import { notFound } from "next/navigation";
import { Metadata } from "next";
import blogPosts from "@/data/blog-posts.json";

// Create a properly typed interface for the params
// Using a type alias instead of an interface to avoid empty interface warning
type SlugPromise = Promise<{ slug: string }>;

// Type for the component props
type PagePropsWithPromise = {
  params: SlugPromise;
};

export async function generateMetadata({ params }: PagePropsWithPromise): Promise<Metadata> {
  // Resolve the promise to get the actual slug
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);
  
  return {
    title: post?.title ?? "Blog",
    description:
      post?.description ??
      "Read insights and updates on AI, Data Science, and Software Engineering.",
    openGraph: {
      title: post?.title,
      description: post?.description,
      url: `https://jasonsrobinson.com/blog/${resolvedParams.slug}`,
      siteName: "Jason Robinson | Blog",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: post?.title,
      description: post?.description,
    },
  };
}

export default async function BlogPostPage({ params }: PagePropsWithPromise) {
  // Resolve the promise to get the actual slug
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

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