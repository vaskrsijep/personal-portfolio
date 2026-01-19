/** @type {import('next').NextConfig} */
const nextConfig = {
  // Suppress environment variable warnings during build
  env: {
    NEXT_PUBLIC_LOCALE: 'en',
  },
  // Ignore build errors for ENVIRONMENT_FALLBACK
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
};

export default nextConfig;
