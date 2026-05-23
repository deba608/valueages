import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    // Also add to domains for compatibility
    domains: ["images.unsplash.com"],
  },
};

export default nextConfig;
