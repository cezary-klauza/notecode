import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    turbo: {
      rules: {
        test: ['/\.worker\.(js|ts)$/'],
        use: {
          loaders: ['worker-loader']
        }
      }
    }
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.worker\.(js|ts)$/,
      use: { loader: 'worker-loader' },
    });

    return config;
  },
};

export default nextConfig;
