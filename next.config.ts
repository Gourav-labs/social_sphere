import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["images.ctfassets.net"], // 👈 Required for Contentful images
  },
};

export default nextConfig;
