import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow phones/other devices on the LAN to load Next.js dev assets (HMR, chunks).
  allowedDevOrigins: ["192.168.*.*", "10.*.*.*"],
};

export default nextConfig;
