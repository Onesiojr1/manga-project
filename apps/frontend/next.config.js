/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      }
    ]
  },
  env: {
    Backend_URL: process.env.Backend_URL
  }
};

module.exports = nextConfig;
