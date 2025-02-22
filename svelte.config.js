import sveltePreprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

export default {
  preprocess: sveltePreprocess()
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			fallback: '404.html'
		}),
		paths: {
			base: process.argv.includes('dev') ? '' : process.env.BASE_PATH
		}
	}
};

export default config;
