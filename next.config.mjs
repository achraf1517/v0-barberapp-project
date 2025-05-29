/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
    unoptimized: process.env.NODE_ENV !== 'production',
  },
  output: 'standalone',
  trailingSlash: false,
}

export default nextConfig