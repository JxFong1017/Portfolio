/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'upload.wikimedia.org',
      'static.vecteezy.com',
      'cdn.freebiesupply.com',
      'picsum.photos', 
    ],
  },
};

export default nextConfig;
