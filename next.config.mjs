/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Ensures best practices and warns for issues
  swcMinify: true, // Enables the new SWC-based minification for faster builds
  // No 'appDir' here since it's causing issues
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

export default nextConfig;
