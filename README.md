# Next.js Storefront

A modern e-commerce storefront built with Next.js, showcasing products from the Fake Store API.

## Features

- Responsive product listing with grid layout
- Dynamic product detail pages with server-side rendering
- Optimized images using next/image
- Dynamic Open Graph metadata and images for social sharing
- Server-side rendering for better SEO
- Error handling for invalid product IDs
- Clean and modern UI with TailwindCSS
- Type-safe development with TypeScript
- Hourly data revalidation for fresh content

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- TailwindCSS
- Fake Store API
- Next/OG for dynamic Open Graph images

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
cd storefront
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- `/src/app` - Next.js app router pages and API routes
  - `/products/[id]` - Dynamic product pages
  - `/api/og` - Open Graph image generation
- `/src/components` - Reusable React components
- `/src/lib` - Utility functions and API calls
- `/src/types` - TypeScript type definitions

## API Integration

The project uses the Fake Store API:
- Products list: https://fakestoreapi.com/products
- Individual product: https://fakestoreapi.com/products/[id]

## Open Graph Implementation

The project implements dynamic Open Graph images for social sharing:
- Each product page generates a unique OG image
- Images are generated on-demand using the Edge runtime
- OG metadata includes product title, description, and price
- Images are optimized for social media platforms

## Known Limitations

- The Fake Store API is for demonstration purposes only
- No authentication or user management
- No shopping cart functionality
- No payment processing
- OG images are generated on-demand and may have a slight delay on first load

## Deployment

The project can be easily deployed to Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/storefront)

## License

MIT
