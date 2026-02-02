/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'crwenterprise.in',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },
  basePath: process.env.NODE_ENV === 'production' ? '/pvs-electrical' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/pvs-electrical' : '',
}

module.exports = nextConfig
