/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/solutions/buildingshield',
        destination: '/solutions/building-shield',
      },
      {
        source: '/solutions/gridshield',
        destination: '/solutions/grid-shield',
      },
      {
        source: '/solutions/computeshield',
        destination: '/solutions/compute-shield',
      },
      {
        source: '/privacy',
        destination: '/privacy-policy',
      },
      {
        source: '/cookies',
        destination: '/cookie-policy',
      },
    ];
  },
};

export default nextConfig;
