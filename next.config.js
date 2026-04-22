/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "statik.tempo.co",
      },
      {
        protocol: "https",
        hostname: "awsimages.detik.net.id",
      },
    ],
  },
};

module.exports = nextConfig;
