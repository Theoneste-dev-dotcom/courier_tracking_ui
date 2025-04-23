import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
   remotePatterns: [
    {
      protocol: 'http',
      hostname: 'localhost',
      port: '3001', // Specify the port if needed
      pathname: '/uploads/profilepics/**', // Optionally restrict to specific paths
    },
  
  ],
}
  /* config options here */
};

export default nextConfig;
