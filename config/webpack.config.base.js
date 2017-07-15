let webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports ={
	entry: {
		vendor:['./node_modules/angular/angular'],
		bundle:['./app/js/main']
	},
	output:{
		filename:'[name].js',
		path:'dist'
	},
	module:{
		rules:[
			{
				test:/\.woff2$/,
				loader:'file-loader?name=fonts/[name].woff2'
			},{
				test:/\.html$/,
				loader: 'html-loader'
			}
		]
	},
	resolve:{
		modules:['../../node_modules']  //so we can use `import angular from 'angular'`
	},
	plugins:[
		new webpack.optimize.CommonsChunkPlugin({
			name:'vendor'
		}),
		new HtmlWebpackPlugin({
			template:'./app/index.html',
			favicon: './app/favicon.png',
			minify:{
				removeScriptTypeAttributes:true
			}
		})
	]
}