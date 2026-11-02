import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@dub/ui", "@dub/utils"],
};

export default nextConfig;
