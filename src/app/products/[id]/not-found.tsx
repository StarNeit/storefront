import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h2 className="mb-4 text-2xl font-bold">Product Not Found</h2>
      <p className="mb-8 text-gray-600">
        We couldn&apos;t find the product you&apos;re looking for.
      </p>
      <Link
        href="/"
        className="inline-block rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
      >
        Return to Home
      </Link>
    </div>
  );
} 