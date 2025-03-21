import { useEffect, useState } from "react";

interface BlogPost {
  id: string;
  title: string;
  description: string;
  slug: string;
  content: string;
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const [post, setPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    async function fetchPost() {
      const res = await fetch(`/api/blog`);
      const data: BlogPost[] = await res.json();
      const foundPost = data.find((p) => p.slug === params.slug);
      setPost(foundPost || null);
    }
    fetchPost();
  }, [params.slug]);

  if (!post) {
    return <p className="text-center text-gray-500">Loading...</p>;
  }

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
