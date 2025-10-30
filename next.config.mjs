/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "openaccess-cdn.clevelandart.org"
            }
        ]
    },
};

export default nextConfig;
