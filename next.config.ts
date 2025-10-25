import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'api.microlink.io',
      },
      {
        protocol: 'https',
        hostname: 'ui.aceternity.com',
      },
      {
        protocol: 'https',
        hostname: 'in.pinterest.com',
      },
      {
        protocol: 'https',
        hostname: 'i.pinimg.com',
      },
    ],
  },
};

export default nextConfig;
