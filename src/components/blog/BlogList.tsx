import Image from "next/image";
import Link from "next/link";
import blogPosts from "../../../data/blog-posts.json";


export default function BlogList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {blogPosts.map((post) => {
        const imageUrl = post.imageUrl || "/images/default-thumbnail.jpg"; // Default if missing

        return (
          <div key={post.id} className="flex items-start bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-[1.02] gap-x-6">

            {/* Image - Ensuring Fixed Size */}
            <div className="w-2/5">
              <Image 
                src={imageUrl} 
                width={350} // Increased width for uniformity
                height={250} // Fixed height for consistent grid
                className="w-full h-[200px] object-cover rounded-l-lg" 
                alt={post.title} 
              />
            </div>

            {/* Blog Content - Improved Spacing */}
            <div className="w-3/5 flex flex-col justify-center" style={{ paddingLeft: "20px", marginLeft: "15px" }}>  
              <h3 className="text-lg font-semibold text-gray-800">{post.title}</h3>
              <p className="text-gray-600 text-sm mt-3">{post.description.substring(0, 100)}...</p>
              <Link href={`/blog/${post.id}`} className="mt-4 inline-block text-blue-600 font-semibold hover:underline">
                Read More →
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}