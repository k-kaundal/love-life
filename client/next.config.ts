/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'article.kaundal.vip',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/graphql',
        destination: 'https://article.kaundal.vip/graphql',
      },
    ];
  },
};

module.exports = nextConfig;