/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { remotePatterns: [
    {
      protocol: 'https',
      hostname: 'openweathermap.org',
      port: '',
      pathname: '/img/wn/**',
    },
    {
      protocol: 'https',
      hostname: 'res.cloudinary.com',
      port: '',
      pathname: '/*/image/upload/**',
    },
  ], },
};

module.exports = nextConfig;
