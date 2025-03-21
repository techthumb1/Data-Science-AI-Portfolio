import BlogCard from './BlogCard';
import blogPosts from '@/data/blog-posts.json';

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  imageUrl: string;
  description: string;
}

const typedBlogPosts: BlogPost[] = blogPosts as BlogPost[];

export default function BlogList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {typedBlogPosts.map((post: BlogPost) => (
        <BlogCard 
          key={post.slug}
          title={post.title}
          description={post.description}
          date={post.date}
          slug={post.slug}
          imageUrl={post.imageUrl}
        />
      ))}
    </div>
  );
}
