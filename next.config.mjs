/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  turbopack: { root: process.cwd() },
  images: { formats: ['image/avif', 'image/webp'] }
};
export default nextConfig;
