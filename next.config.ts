import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   images: {
    formats: ['image/webp', 'image/avif'],
     domains: ["images.ctfassets.net"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  experimental: {
    optimizeCss: false,
    optimizePackageImports: ['lucide-react', '@headlessui/react'],
  },
};

export default nextConfig;
