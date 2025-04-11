import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	output: 'export',
	basePath: '/prepare-questions-interview',
	images: {
		unoptimized: true,
	},
};

export default nextConfig;
