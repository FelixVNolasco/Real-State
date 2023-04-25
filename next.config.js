/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["ssl.cdn-redfin.com","res.cloudinary.com", "img.icons8.com"],
  },
};

module.exports = nextConfig
