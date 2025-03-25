import blogPosts from "@/data/blog-posts.json";
import BlogCard from "./BlogCard"; // Adjust path if needed

// ✅ Define or import the type globally to avoid duplication
export interface BlogPost {
  slugs: string;
  title: string;
  date: string;
  imageUrl: string;
  description: string;
}

// ✅ Safely cast the imported JSON
const typedBlogPosts: BlogPost[] = blogPosts.map(post => ({
  slugs: post.slugs,
  title: post.title,
  date: post.date,
  imageUrl: post.imageUrl,
  description: post.description
}));

export default function BlogList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {typedBlogPosts.map((post) => (
        <BlogCard 
          key={post.slugs}
          title={post.title}
          description={post.description}
          date={post.date}
          slugs={post.slugs}
          imageUrl={post.imageUrl}
        />
      ))}
    </div>
  );
}
