import adapter from '@sveltejs/adapter-static';
import path from 'path'

import P69 from '@paulio/p69-svelte'
import tokens from './src/tokens.js'

if (process.env.NODE_ENV === 'development') {
	P69.watch(tokens)
} else {
	await P69.file(tokens)
}

const config = {
	kit: {
		adapter: adapter()
	},
	preprocess: [P69.svelte(tokens)],
};

export default config;
