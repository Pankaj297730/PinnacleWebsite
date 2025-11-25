import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    domains: [
      "images.pexels.com",
      "picsum.photos",
      "res.cloudinary.com",
      "wallpaperaccess.com",
    ],
  },
};

export default nextConfig;
