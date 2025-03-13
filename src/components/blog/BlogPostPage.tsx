import { notFound } from 'next/navigation';
import blogPosts from '../../../data/blog-posts.json';
import Image from 'next/image';
import Link from 'next/link';

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) return notFound();

  return (
    <main className="container mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-500">{post.date}</p>
      {post.imageUrl && (
        <Image
          src={post.imageUrl}
          alt={post.title}
          width={800}
          height={450}
          className="w-full rounded-lg my-6"
        />
      )}
      <Link href="/blog">
        <a className="mt-6 inline-block text-blue-600 hover:underline">← Back to Blog</a>
      </Link>
    </main>
  );
}
