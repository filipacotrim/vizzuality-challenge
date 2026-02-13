import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: { unoptimized: true },
  output: "standalone", // for static export if needed
};


export default nextConfig;
