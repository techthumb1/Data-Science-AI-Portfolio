import { notFound } from "next/navigation";
import blogPosts from "@/data/blog-posts.json";
import RedirectClient from "@/components/common/RedirectClient"; // your existing component

type SlugPromise = Promise<{ slugs: string }>;

type PagePropsWithPromise = {
  params: SlugPromise;
};

export default async function BlogPostPage({ params }: PagePropsWithPromise) {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slugs === resolvedParams.slugs);

  if (!post || !post.url) {
    notFound();
  }

  return <RedirectClient url={post.url} />;
}
