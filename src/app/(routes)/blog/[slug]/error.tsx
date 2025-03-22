'use client';

import Link from 'next/link';

export default function ErrorPage() {
    return (
      <main className="h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold">404 - Blog Not Found</h1>
        <p className="text-gray-500 mt-2">The blog post you’re looking for doesn’t exist.</p>
        <Link href="/blog">
          <a className="mt-4 text-blue-600 hover:underline">Back to Blog</a>
        </Link>
      </main>
    );
  }
  