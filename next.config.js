/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'crwenterprise.in',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },
}

module.exports = nextConfig
