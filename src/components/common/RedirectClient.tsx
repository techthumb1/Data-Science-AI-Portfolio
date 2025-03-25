'use client';

import { useEffect } from "react";

export default function RedirectClient({ url }: { url: string }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = url;
    }, 1500); // Give user a brief moment to see the message

    return () => clearTimeout(timer);
  }, [url]);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-center px-6">
      <h1 className="text-2xl font-semibold text-gray-800">Redirecting to Medium...</h1>
      <p className="text-gray-500 mt-2">Please wait while we take you to the article.</p>
    </main>
  );
}
