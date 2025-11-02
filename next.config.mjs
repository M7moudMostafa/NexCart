/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "openaccess-cdn.clevelandart.org"
            },
            {
                protocol: "https",
                hostname: "images.pexels.com"
            },
            {
                protocol: "https",
                hostname: "live.staticflickr.com"
            }
        ]
    },
};

export default nextConfig;
