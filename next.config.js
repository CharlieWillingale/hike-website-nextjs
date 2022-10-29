/** @type {import('next').NextConfig} */

const debug = process.env.NODE_ENV !== "production";

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
}

module.exports = {
  nextConfig,

  exportPathMap: function () {
    return {
      "/": { page: "/" },
      "/ap-grid-layout": { page: "/ap-grid-layout" },
    }
  },
  assetPrefix: !debug ? '/hike-website-nextjs/' : '',
}
