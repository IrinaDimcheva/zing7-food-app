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
    {
      protocol: 'https',
      hostname: 'duyt4h9nfnj50.cloudfront.net',
      port: '',
    },
  ],
};

export default nextConfig;
