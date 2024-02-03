/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns:[
            {
                hostname:'*s'
            }
        ]
    }
};

export default nextConfig;
