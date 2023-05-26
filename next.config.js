/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  async rewrites() {
      return [
        {
          source: '/e53d-34-86-11-74.ngrok-free.app/:path*',
          destination: 'https://e53d-34-86-11-74.ngrok-free.app/:path*',
        },
      ]
    },
};

