/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "github.com"
            },
            {
                hostname: "www.gstatic.com"
            }

        ]
    }
};

export default nextConfig;

