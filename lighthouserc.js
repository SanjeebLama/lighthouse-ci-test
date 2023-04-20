module.exports = {
	ci: {
		collect: {
			url: ['http://localhost:3000', 'http://localhost:3000/about', 'http://localhost:3000/contact'],
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
