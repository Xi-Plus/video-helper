const js = require('@eslint/js');
const globals = require('globals');

module.exports = [
	js.configs.recommended,
	{
		files: ['**/*.js'],
		languageOptions: {
			ecmaVersion: 2015,
			sourceType: 'script',
			globals: {
				...globals.browser,
				...globals.jquery,
			},
		},
		rules: {
			'no-redeclare': 'off',
			'no-unused-labels': 'off',
			'no-unused-vars': [
				'error',
				{
					argsIgnorePattern: '^_',
				},
			],
			quotes: [
				'error',
				'single',
				{
					avoidEscape: true,
				},
			],
		},
	},
	{
		files: ['eslint.config.js'],
		languageOptions: {
			ecmaVersion: 2018,
			sourceType: 'commonjs',
			globals: globals.node,
		},
	},
];
