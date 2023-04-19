module.exports = {
	ci: {
		collect: {
			url: ['http://localhost:3000', "https://lighthouse-ci-test-gray.vercel.app/"],
			startServerCommand: 'npm run start',
		},
		assert: {
			preset: 'lighthouse:recommended',
			// preset: 'lighthouse:no-pwa',
		},
		upload: {
			target: 'temporary-public-storage',
		},
	},
};
