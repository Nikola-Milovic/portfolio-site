import bundleAnalyzer from '@next/bundle-analyzer';
import remarkFrontmatter from 'remark-frontmatter';
import remarkGfm from 'remark-gfm';

/** @type {import('next').NextConfig} */
const config = {
  eslint: {
    dirs: ['src'],
  },

  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'tsx', 'ts'],

  images: {
    domains: [
      'res.cloudinary.com',
      'picsum.photos', //TODO
    ],
  },

  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            typescript: true,
            icon: true,
          },
        },
      ],
    });

    config.module.rules.push({
      test: /\.mdx?$/,
      use: [
        options.defaultLoaders.babel,
        {
          loader: '@mdx-js/loader',
          options: {
            //  providerImportSource: '@mdx-js/react',
            remarkPlugins: [remarkFrontmatter, remarkGfm],
          },
        },
      ],
    });

    return config;
  },
};

export default bundleAnalyzer({ enabled: process.env.ANALYZE === 'true' })(
  config
);
