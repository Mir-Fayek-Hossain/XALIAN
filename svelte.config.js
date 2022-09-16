import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			postcss: true
		})
	],

	kit: {
		adapter: adapter(),
		trailingSlash: 'ignore',
		alias: {
			$src: 'src',
			$domain: 'src/domain',
			$presentation: 'src/presentation',
			$data: 'src/data'
		}
	}
};

export default config;
