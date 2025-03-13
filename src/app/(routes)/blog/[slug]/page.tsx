import { notFound } from 'next/navigation';
import blogPosts from '../../../../../data/blog-posts.json';
// export { default } from '../../../../components/blog/BlogPostPage';
import Image from 'next/image';


export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) return notFound();

  return (
    <main className="container mx-auto py-12">
      <h1 className="text-4xl font-bold text-center">{post.title}</h1>
      <p className="text-gray-500 text-center mt-2">{post.date}</p>
      <div className="flex justify-center mt-6">
        <Image
          src={post.imageUrl || '/default-image.jpg'}
          alt={post.title}
          width={800}  // Adjust width as needed
          height={450} // Adjust height as needed
          className="rounded-lg"
        />
      </div>
      <p className="text-lg text-gray-800 mt-6 px-6">{post.content}</p>
    </main>
  );
}
