/**
 * Babel Config, .babelrc equivalent.
 *
 * @type {{presets: [[]|String|Object]}}
 */
module.exports = {
	'presets': [
		[
			'@babel/preset-env',
			{
				useBuiltIns: 'usage',
				corejs: {
					version: 3,
					proposals: true
				},
			}
		]
	],
};
