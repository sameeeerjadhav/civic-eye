/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // Optimized for production
  images: {
    unoptimized: true, // For static hosting
  },
  // Ensure proper routing
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;