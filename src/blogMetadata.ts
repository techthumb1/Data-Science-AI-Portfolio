import { Metadata } from "next";
import blogPosts from "@/data/blog-posts.json";

export function getBlogMetadata(slugs: string): Metadata {
  const post = blogPosts.find((p) => p.slugs === slugs);
  if (!post) {
    throw new Error(`Post with slug "${slugs}" not found`);
  }
  return {
    title: post.title,
    description: post.description,
  };
}
