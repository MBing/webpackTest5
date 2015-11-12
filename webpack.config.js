var path = require('path');


module.exports = {
	context: path.resolve('js'),
	entry: ["./app"],
	output: {
		path: path.resolve('build/js/'),
		publicPath: '/public/assets/js/',
		filename: "bundle.js"
	},
	devServer: {
		contentBase: 'public'
	},
	module: {
		loaders: [
			{
				test: /\.css$/,
				exclude: /node_modules/,
				loader: "style!css"
			},
			{
				test: /\.styl$/,
				exclude: /node_modules/,
				loader: "style!css!stylus"
			}
		]
	},
	resolve: {
		extensions: ["", ".js", ".es6"]
	}
}
