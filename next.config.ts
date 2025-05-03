import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ui-avatars.com", // Allow images from ui-avatars.com
      },
    ]
  }
};

export default nextConfig;
