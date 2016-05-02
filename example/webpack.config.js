module.exports = {
	context: __dirname,
	entry: './app.jsx',
	output: {
		path: __dirname + '/',
		pathinfo: true,
		filename: 'bundle.js',
	},
	devtool: 'eval',
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
	resolve: {
		extensions: ['', '.json', '.js', '.jsx'],
	},
};
