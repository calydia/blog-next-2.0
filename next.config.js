/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['blog-drupal.sanna.ninja', 'drupal.ampere.corrupted.pw'],
    formats: ['image/avif', 'image/webp']
  },
}

module.exports = nextConfig
