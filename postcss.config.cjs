const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const postcssPresetEnv = require('postcss-preset-env');

const mode = process.env.NODE_ENV;
const dev = mode === 'development';

const config = {
	plugins: [
		require('postcss-import'),
		require('tailwindcss/nesting'),
		require('postcss-nesting'),
		// Some plugins, like tailwindcss/nesting, need to run before Tailwind,
		tailwindcss(),
		// require('postcss-nested'),
		//But others, like autoprefixer, need to run after,
		autoprefixer,
		// Use Future CSS Today
		postcssPresetEnv({
			stage: 3,
			features: {
				'nesting-rules': true,
				'custom-media-queries': true,
				'media-query-ranges': true
			}
		}),

	]
};

module.exports = config;
