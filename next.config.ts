import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	output: 'export',
	basePath:
		process.env.NODE_ENV === 'production' ? '/prepare-questions-interview' : '',
	images: {
		unoptimized: true,
	},
	typescript: {
		ignoreBuildErrors: false,
	},
	publicRuntimeConfig: {
		NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
	},
};

export default nextConfig;
