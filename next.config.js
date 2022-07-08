/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
      },
      {
        source: '/seller/daftar-jual',
        destination: '/seller/daftar-jual/semua-produk',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
