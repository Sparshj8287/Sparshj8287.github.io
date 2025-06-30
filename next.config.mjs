/** @type {import('next').NextConfig} */
const nextConfig = {
  // Add the following two lines.
  output: 'export',
  images: {
    unoptimized: true,
  },
  
  // keep any other options you already have
};

export default nextConfig;
