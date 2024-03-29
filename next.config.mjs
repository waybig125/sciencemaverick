/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: "imgix.cosmicjs.com", protocol: "https" }],
  },
};

export default nextConfig;
