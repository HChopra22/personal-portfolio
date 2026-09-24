/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      // Old CV path — keep existing links working
      { source: '/HarshChopraCV-july.pdf', destination: '/cv/HarshChopra-CV.pdf', permanent: true },
    ]
  },
}

export default nextConfig
