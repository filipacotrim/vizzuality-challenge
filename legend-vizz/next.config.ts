import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/vizzuality-challenge", // required for GitHub Pages or subpaths
  assetPrefix: process.env.NODE_ENV === "production" ? "/vizzuality-challenge/" : "",
  images: { unoptimized: true },
  output: "export", // for static export if needed
};


export default nextConfig;
