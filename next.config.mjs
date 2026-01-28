/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lightgoldenrodyellow-wasp-126965.hostingersite.com',
      },
    ],
  },
};

export default nextConfig;
