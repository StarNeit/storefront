export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 h-8 w-48 animate-pulse rounded bg-gray-200"></div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="group">
            <div className="aspect-h-1 aspect-w-1 w-full animate-pulse overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7"></div>
            <div className="mt-4 h-4 w-3/4 animate-pulse rounded bg-gray-200"></div>
            <div className="mt-2 h-6 w-1/4 animate-pulse rounded bg-gray-200"></div>
          </div>
        ))}
      </div>
    </div>
  );
} 