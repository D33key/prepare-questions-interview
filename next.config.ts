import type { NextConfig } from 'next';

console.log(process.env.NODE_ENV)
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
