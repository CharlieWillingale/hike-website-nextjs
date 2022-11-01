/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  env: {
    prod_filepath: '/hike-website-nextjs',
  },
}

module.exports = nextConfig
