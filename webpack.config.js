const context = __dirname + '/example';

module.exports = {
	context: context,
	entry: './index.jsx',
	output: {
		path: context,
		pathinfo: true,
		filename: 'bundle.js'
	},
	devtool: 'eval',
	module: {
		loaders: [
			{
				test: /\.jsx$/,
				loader: 'babel',
				exclude: /node_modules/,
				query: {
					cacheDirectory: true	
				}
			}
		]
	},
	resolve: {
		extensions: ['', '.json', '.js', '.jsx']
	}
};
