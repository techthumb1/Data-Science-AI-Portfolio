import BlogList from '@/components/blog/BlogList';
import Image from 'next/image';

const post = {
  image: '/path/to/image.jpg',
  title: 'Sample Blog Post'
};

<Image 
  src={post.image} 
  width={300}  
  height={180} 
  alt={post.title} 
  className="rounded-lg shadow-md object-cover"
/>

export default function BlogPage() {
  return (
    <main className="container mx-auto py-12">
      <h1 className="text-3xl font-bold text-center mb-8">Blog</h1>
      <BlogList />
    </main>
  );
}
