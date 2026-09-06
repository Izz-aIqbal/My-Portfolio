/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "izz-aiqbal.github.io",
        pathname: "/My-Portfolio/images/**",
      },
    ],
  },
};

module.exports = nextConfig;
