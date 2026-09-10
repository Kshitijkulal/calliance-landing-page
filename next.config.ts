/** @type {import('next').NextConfig} */
const nextConfig = {
  // If you also want to allow port-specific access or localhost variants
  allowedDevOrigins: [
    '192.168.1.34',
    '192.168.1.34:3000', // Include the port if accessing via port directly
    '192.168.1.24',
    '192.168.1.24:3000' 
  ],
};

export default nextConfig; // or module.exports = nextConfig;