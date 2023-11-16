/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.weatherbit.io',
            },
        ],
    },
    env: {
        WEATHER_BIT_API_KEY: process.env.NEXT_PUBLIC_WEATHER_BIT_API_KEY,
    }
}

module.exports = nextConfig
