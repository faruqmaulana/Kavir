module.exports = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["res.cloudinary.com"],
    deviceSizes: [400, 600, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
};
