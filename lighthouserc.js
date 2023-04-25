module.exports = {
	ci: {
		collect: {
			//Use this for Prod / dev
			url: [
				`https://${process.env.PREVIEW_URL}`,
				// `https://${process.env.PREVIEW_URL}/about`,
			],

			//Use this for Local
			// url: ['http://localhost:3000','http://localhost:3000/about'],
			startServerCommand:
				process.env.NODE_ENV === 'production' ? undefined : 'npm run start',

			// settings: {
			// 	// Don't run certain audits
			// 	skipAudits: ['redirects-http'],
			// },
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
