import { ImageResponse } from 'next/og';
import { getProduct } from '@/lib/api';

export const runtime = 'edge';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return new Response('Missing product ID', { status: 400 });
    }

    const product = await getProduct(parseInt(id));

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'white',
            padding: '40px',
          }}
        >
          <img
            src={product.image}
            alt={product.title}
            style={{
              width: '300px',
              height: '300px',
              objectFit: 'contain',
            }}
          />
          <div
            style={{
              fontSize: 40,
              fontWeight: 'bold',
              textAlign: 'center',
              marginTop: '20px',
            }}
          >
            {product.title}
          </div>
          <div
            style={{
              fontSize: 30,
              color: '#666',
              marginTop: '10px',
            }}
          >
            ${product.price}
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (error) {
    return new Response('Failed to generate OG image', { status: 500 });
  }
} 