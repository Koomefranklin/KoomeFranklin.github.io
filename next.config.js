/** @type {import('next').NextConfig} */
const nextConfig = {
	// uncomment for build

	output: 'export',
	// trailingSlash: true,
	// basePath: '/expo', // For local Apache

	images: {
		unoptimized: true,
	},
};

module.exports = nextConfig;
