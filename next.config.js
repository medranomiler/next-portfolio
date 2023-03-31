/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  env: {
    MONGO_URI: process.env.MONGO_URI,
  },
  ...nextConfig,
};