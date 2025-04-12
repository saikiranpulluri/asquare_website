/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    // You can also add other configuration options as needed:
    trailingSlash: true, // Ensures URL consistency by adding trailing slashes
    // basePath: '/your-subfolder', // Uncomment and set if deploying to a subdirectory
    // assetPrefix: '', // Set if you are serving assets from a CDN or a specific path
  };

export default nextConfig;
