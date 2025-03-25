"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import TitleDivider from "@/components/TitleDivider";

export default function BlogPage() {
  interface Post {
    id: string;
    title: string;
    description: string;
    slugs: string;
    image: string;
  }

  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch("/api/blog");
        const data = await res.json();
        setPosts(data);
      } catch (error) {
        console.error("Failed to fetch blog posts:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  if (loading) return <p className="text-center text-gray-600">Loading blog posts...</p>;

  return (
    <main className="container mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold text-center mb-6 text-gray-900">
        Blog Posts <TitleDivider />
      </h1>

      <div className="max-w-3xl mx-auto space-y-6">
        {posts.map((post) => (
          <div key={post.id} className="p-6 border-b border-gray-300 flex flex-col md:flex-row items-center md:items-start gap-6">
            
            {/* Blog Post Image */}
            <Image 
              src={post.image} 
              width={200} 
              height={130} 
              alt={post.title} 
              className="rounded-lg shadow-md"
            />

            {/* Blog Post Details */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-800">{post.title}</h2>
              <p className="text-gray-700 mt-2">{post.description}</p>
              <Link href={`/blog/${post.slugs}`} className="text-blue-600 mt-3 inline-block">
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Medium Profile Link (Only Displayed Once) */}
      <div className="text-center mt-10">
        <p className="text-lg text-gray-700">Read more on my Medium profile:</p>
        <a href="https://medium.com/@robinsonjason761" target="_blank" rel="noopener noreferrer"
          className="mt-3 inline-block px-6 py-3 bg-[#2C3E50] text-white rounded-lg shadow-md hover:bg-[#1C2833] transition">
          Visit My Blog
        </a>
      </div>
    </main>
  );
}
