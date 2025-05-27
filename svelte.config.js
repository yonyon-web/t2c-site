import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const repoName = 't2c-site';

const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			pages: "docs",
			assets: "docs",
			fallback: 'index.html',
		}),
		paths: {
			base: process.env.NODE_ENV === 'production' ? `/${repoName}` : ''
		},
		prerender: {
			entries: ['*']
		}
	}
};

export default config;
