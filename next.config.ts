import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	output: 'export',
	basePath:
		process.env.NODE_ENV === 'production'
			? '/prepare-questions-interview'
			: '',
	images: {
		unoptimized: true,
	},
};

export default nextConfig;
