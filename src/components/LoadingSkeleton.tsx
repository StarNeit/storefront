interface LoadingSkeletonProps {
  type: 'product-card' | 'product-detail';
}

export default function LoadingSkeleton({ type }: LoadingSkeletonProps) {
  if (type === 'product-card') {
    return (
      <div className="group">
        <div className="aspect-h-1 aspect-w-1 w-full animate-pulse overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7"></div>
        <div className="mt-4 h-4 w-3/4 animate-pulse rounded bg-gray-200"></div>
        <div className="mt-2 h-6 w-1/4 animate-pulse rounded bg-gray-200"></div>
      </div>
    );
  }

  return (
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
  );
} 