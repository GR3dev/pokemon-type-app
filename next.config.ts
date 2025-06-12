import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  output: 'export',
  // or if older Next.js version
  // exportTrailingSlash: true,
  // basePath: '/your-repo-name', (if using basePath for github pages)
};

export default nextConfig;
