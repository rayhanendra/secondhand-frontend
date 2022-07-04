/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/seller/daftar-jual',
        destination: '/seller/daftar-jual/semua-produk',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
