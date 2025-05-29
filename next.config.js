/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
    unoptimized: process.env.NODE_ENV !== 'production',
  },
  output: 'standalone',
  trailingSlash: false,
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      }
    }
    return config
  },
  // Agregar configuración para WebSocket
  webSocketServer: {
    path: '/_next/webpack-hmr',
    options: {
      maxPayload: 512 * 1024, // 512KB
    },
  },
}

module.exports = nextConfig
