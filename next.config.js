/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    minimumCacheTTL: 10000,
    domains: [
      "images.unsplash.com",
    ],
  },
}

module.exports = nextConfig
