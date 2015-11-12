var webpack = require('webpack'),
	path = require('path');
//var template = require("jade!./file.jade");


module.exports = {
	context: path.resolve('js'),
	entry: ["./app",'file?name=index.html!jade-html!../public/index.jade'],
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
			//,
			//{
			//	test: /\.jade$/,
			//	exclude: /node_modules/,
			//	loader: "file?name=[name].html!jade-html"
			//}
		]
	},
	resolve: {
		extensions: ["", ".js", ".es6", ".jade", "json"],
		modulesDirectories: ['node_modules']
	}
}
