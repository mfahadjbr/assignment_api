/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns:[
            {
                protocol: "https",
                hostname: "via.placeholder.com",
            },
            {
                protocol: "https",
                hostname: "ui-avatars.com",
            },
        ]
    }
};

export default nextConfig;
