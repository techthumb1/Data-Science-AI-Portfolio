import Link from 'next/link';
import Image from 'next/image';

interface BlogCardProps {
  title: string;
  description: string;
  date: string;
  slugs: string;
  imageUrl: string;
  url?: string; // optional external URL
}

export default function BlogCard({ title, description, date, slugs, imageUrl, url }: BlogCardProps) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition">
      <Image src={imageUrl} alt={title} width={600} height={400} className="rounded-md" />
      <h3 className="text-xl font-semibold mt-3">{title}</h3>
      <p className="text-sm text-gray-500">{date}</p>
      <p className="text-gray-700 mt-2">{description}</p>

      {url ? (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 font-semibold mt-3 block"
        >
          Read More →
        </a>
      ) : (
        <Link href={`/blog/${slugs}`} className="text-blue-600 font-semibold mt-3 block">
          Read More →
        </Link>
      )}
    </div>
  );
}
