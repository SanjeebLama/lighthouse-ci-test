module.exports = {
	ci: {
		collect: {
			url: [`https://${process.env.PREVIEW_URL}`],
			startServerCommand:
				process.env.NODE_ENV === 'production' ? undefined : 'npm run start',
		},
		assert: {
			// preset: 'lighthouse:recommended',
			preset: 'lighthouse:no-pwa',
			// skipAudits on following:
			assertions: {
				'bf-cache': 'off',
				'csp-xss': 'off',
				'unused-javascript': 'off',
				'is-crawlable': 'off',
			},
		},
		upload: {
			target: 'temporary-public-storage',
		},
	},
};
