/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['remark-gfm', 'remark', 'unified'],
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

export default nextConfig;
