import LoadingSkeleton from '@/components/LoadingSkeleton';

export default function Loading() {
  return (
    <main className="container mx-auto px-4 py-8">
      <LoadingSkeleton type="product-detail" />
    </main>
  );
} 