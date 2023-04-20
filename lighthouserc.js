module.exports = {
	ci: {
		collect: {
			url: process.env.NODE_ENV === 'production' ? [`https://${process.env.PREVIEW_URL}`] : ['http://localhost:3000/'],
			startServerCommand: process.env.NODE_ENV === 'production' ? undefined : 'npm run start',
		},
		assert: {
			// preset: 'lighthouse:recommended',
			preset: 'lighthouse:no-pwa',
			// skipAudits:
			assertions: {
				'bf-cache': 'off',
				'csp-xss': 'off',
				'unused-javascript': 'off',
			},
		},
		upload: {
			target: 'temporary-public-storage',
		},
	},
};
