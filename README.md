## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


**Run Lighthouse Audit:**

```bash
yarn run test:lighthouse 
```

## Configurations:
- Edit **lighthouserc.js** file

```JSX
// For running on local env 

module.exports = {
	ci: {
		collect: {
			url: ['http://localhost:3000']
			startServerCommand: 'yarn run dev',
		},
		assert: {
		  preset: 'lighthouse:recommended'
		},
		upload: {
			target: 'temporary-public-storage',
		},
	},
};

```
```JSX

// For running on prod env

module.exports = {
	ci: {
		collect: {
			url: [`https://${process.env.PREVIEW_URL}`],
			startServerCommand: process.env.NODE_ENV === 'production' ? undefined : 'npm run start',
		},
		assert: {
			// preset: 'lighthouse:recommended',
			preset: 'lighthouse:no-pwa',
		},
		upload: {
			target: 'temporary-public-storage',
		},
	},
};
```


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
