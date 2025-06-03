export default function Loading() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="aspect-square animate-pulse rounded-lg bg-gray-200"></div>
        <div className="flex flex-col gap-4">
          <div className="h-8 w-3/4 animate-pulse rounded bg-gray-200"></div>
          <div className="h-6 w-1/4 animate-pulse rounded bg-gray-200"></div>
          <div className="h-4 w-full animate-pulse rounded bg-gray-200"></div>
          <div className="h-4 w-full animate-pulse rounded bg-gray-200"></div>
          <div className="mt-4 h-6 w-24 animate-pulse rounded-full bg-gray-200"></div>
          <div className="mt-4 h-4 w-32 animate-pulse rounded bg-gray-200"></div>
        </div>
      </div>
    </main>
  );
} 