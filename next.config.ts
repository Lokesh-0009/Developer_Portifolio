import type { NextConfig } from "next";

/**
 * Next.js Configuration
 *
 * Configures remote image patterns to allow Next.js Image Optimization
 * for GitHub avatar URLs (used in profile/about sections).
 */
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
    ],
  },
};

export default nextConfig;
