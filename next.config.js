/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    typedRoutes: true,
    serverActions: {
      bodySizeLimit: '2mb'
    }
  },
  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/landing',
        permanent: true,
      },
    ];
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Add path aliases
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.join(__dirname, './app'),
    };

    // Configure module resolution
    config.resolve = {
      ...config.resolve,
      modules: ['node_modules', path.resolve(__dirname)],
      extensions: ['.js', '.jsx', '.json'],
      fallback: {
        ...config.resolve.fallback,
        fs: false,
        path: false,
      },
    };

    // Add source map support for better debugging
    if (dev) {
      config.devtool = 'eval-source-map';
    }

    // Optimize production build
    if (!dev) {
      config.optimization = {
        minimize: true,
        minimizer: [
          (compiler) => {
            const TerserPlugin = require('terser-webpack-plugin');
            new TerserPlugin({
              terserOptions: {
                compress: {
                  drop_console: true,
                },
              },
            });
          },
        ],
      };
    }

    return config;
  },
  // Add output configuration for static exports
  output: 'standalone',
};

module.exports = nextConfig;
