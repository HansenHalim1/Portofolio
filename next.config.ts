import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/projects/:slug",
        destination: "/?project=:slug",
      },
      {
        source: "/cv",
        destination: "/?view=cv",
      },
    ];
  },
};

export default nextConfig;
