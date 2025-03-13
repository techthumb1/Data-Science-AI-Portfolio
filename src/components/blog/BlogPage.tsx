import BlogPosts from "@/components/blog/BlogList";
import Image from "next/image";
import Link from "next/link";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-16 px-6">
      {/* Featured Post Section */}
      <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-lg p-10 mb-12 border border-gray-200">
        <h1 className="text-5xl font-extrabold text-center mb-8 text-gray-800">Insights & Research</h1>
        <div className="flex flex-col md:flex-row items-center gap-6">
          <Image src="/images/featured-blog.jpg" width={500} height={300} className="rounded-lg shadow-md" alt="Featured Post" />
          <div className="flex flex-col">
            <h2 className="text-2xl font-semibold text-gray-800">Latest Breakthrough in AI & Analytics</h2>
            <p className="mt-2 text-gray-600">
              Exploring cutting-edge advancements in AI, analytics, and their real-world applications.
            </p>
            <Link href="/blog/latest">
              <a className="mt-4 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg inline-block transition-all hover:bg-blue-700">
                Read More
              </a>
            </Link>
          </div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">Latest Posts</h2>
        <BlogPosts />
      </div>
    </div>
  );
}
