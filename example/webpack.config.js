const path = require('path');

module.exports = {
	entry: path.join(__dirname, 'App.js'),
	output: {
		path: __dirname,
		filename: 'bundle.js',
	},
	devtool: 'source-map',
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
			}
		]
	},
	resolve: {
		extensions: ['.json', '.js', '.jsx'],
	},
};
