export default {
  // NOTE: uncomment if you want to deploy static build on server manually
  // output: 'export',
  // distDir: 'dist',
  // images: { unoptimized: true },
  eslint: {
    dirs: ['app', 'shared', 'providers', 'config'],
  },
  serverExternalPackages: ['pino-pretty', 'lokijs', 'encoding'],
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"],
  },
}