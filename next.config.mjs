/** @type {import('next').NextConfig} */
const nextConfig = {};

nextConfig.images = {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'images.unsplash.com',
      port: '',
      pathname: '/photo-**',
    },
  ],
};

export default nextConfig;
