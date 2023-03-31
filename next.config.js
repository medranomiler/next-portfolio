/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  env: {
    MONGO_URI: "mongodb+srv://medranomiler:root1234@cluster0.kuljfho.mongodb.net/MyApp"
  },
};

module.exports =  nextConfig 