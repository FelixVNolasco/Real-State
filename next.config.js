/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["ssl.cdn-redfin.com"],
  },
};

module.exports = nextConfig
