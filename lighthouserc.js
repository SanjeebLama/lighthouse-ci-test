module.exports = {
	ci: {
		collect: {
			url: [process.env.PREVIEW_URL],
			startServerCommand: process.env.NODE_ENV === 'production' ? undefined : 'npm run start',
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
