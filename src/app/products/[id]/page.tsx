import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getProduct } from '@/lib/api';

type Props = {
  params: Promise<{ id: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const resolvedParams = await params;
    const product = await getProduct(parseInt(resolvedParams.id));
    
    return {
      title: product.title,
      description: product.description,
      openGraph: {
        title: product.title,
        description: product.description,
        images: [
          {
            url: `/api/og?id=${product.id}`,
            width: 1200,
            height: 630,
            alt: product.title,
          },
        ],
      },
    };
  } catch {
    return {
      title: 'Product Not Found',
      description: 'The requested product could not be found.',
    };
  }
}

export default async function ProductPage({ params }: Props) {
  try {
    const resolvedParams = await params;
    const product = await getProduct(parseInt(resolvedParams.id));

    return (
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-200">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-bold">{product.title}</h1>
            <p className="text-2xl font-semibold text-gray-900">${product.price}</p>
            <p className="text-gray-600">{product.description}</p>
            <div className="mt-4">
              <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                {product.category}
              </span>
            </div>
            <div className="mt-4">
              <p className="text-sm text-gray-500">
                Rating: {product.rating.rate} ({product.rating.count} reviews)
              </p>
            </div>
          </div>
        </div>
      </main>
    );
  } catch {
    notFound();
  }
} 