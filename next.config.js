/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.worldweatheronline.com',
            },
        ],
    },
    env: {
        WEATHER_BIT_API_KEY: process.env.NEXT_PUBLIC_WEATHER_BIT_API_KEY,
        USE_MOCK_DATA: process.env.USE_MOCK_DATA,
    }
}

module.exports = nextConfig
