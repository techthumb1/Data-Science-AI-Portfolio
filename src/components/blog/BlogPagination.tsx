import Link from "next/link";

interface BlogPaginationProps {
  currentPage: number;
  totalPages: number;
}

export default function BlogPagination({ currentPage, totalPages }: BlogPaginationProps) {
  return (
    <div className="flex justify-center space-x-4 mt-8">
      {currentPage > 1 && (
        <Link href={`/blog?page=${currentPage - 1}`} className="px-4 py-2 bg-gray-200 rounded">
          Previous
        </Link>
      )}
      {currentPage < totalPages && (
        <Link href={`/blog?page=${currentPage + 1}`} className="px-4 py-2 bg-gray-200 rounded">
          Next
        </Link>
      )}
    </div>
  );
}
