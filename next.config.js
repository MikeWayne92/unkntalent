/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/unkntalent',
  assetPrefix: '/unkntalent/',
};

module.exports = nextConfig; 