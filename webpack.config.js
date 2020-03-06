'use strict';

const path = require( 'path' );
const TerserJSPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const StyleLintPlugin = require( 'stylelint-webpack-plugin' );

const isProduction = 'production' === process.env.NODE_ENV;
const componentName = 'animate';

module.exports = {
	mode: process.env.NODE_ENV,
	entry: [
		'./src/index.js',
		'./src/style.css'
	],
	output: {
		path: path.resolve( __dirname, './dist' ),
		filename: `${ componentName }.js`,
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				enforce: 'pre',
				loader: 'eslint-loader',
				options: {
					fix: true
				}
			},
			{
				test: /\.js$/,
				exclude: /node_modules(?!\/@10up)/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: [
								[ '@babel/preset-env', {
									'useBuiltIns': 'usage',
									'corejs': 3,
								} ]
							],
							cacheDirectory: true,
							sourceMap: ! isProduction,
						},
					},
				],
			},
			{
				test: /\.css$/,
				exclude: /(node_modules)/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'postcss-loader'
				]
			}
		]
	},
	devtool: 'source-map',
	stats: {
		colors: true
	},
	optimization: {
		minimizer: [
			new TerserJSPlugin({}),
			new OptimizeCSSAssetsPlugin({})
		],
	},
	plugins: [
		// Lint CSS
		new StyleLintPlugin( {
			context: path.resolve( process.cwd(), './src/' ),
			files: '**/*.css',
			fix: true,
		} ),
		new MiniCssExtractPlugin( {
			filename: `${ componentName }.css`,
		} ),
	],
};
