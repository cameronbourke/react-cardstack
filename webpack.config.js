const webpack = require('webpack');

module.exports = {
	entry: './src/index.jsx',
	output: {
		path: './dist/',
		filename: 'react-cardstack.min.js',
		library: 'ReactCardstack',
		libraryTarget: 'umd',
		umdNamedDefine: true,
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				loader: 'babel',
				exclude: /node_modules/,
				query: {
					cacheDirectory: true,
				},
			},
		],
	},
	plugins: [
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.UglifyJsPlugin({
			minimize: true,
			compress: {
				warnings: false,
			},
		}),
	],
	resolve: {
		extensions: ['', '.json', '.js', '.jsx'],
	},
};
