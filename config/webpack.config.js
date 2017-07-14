var path = require('path');
let webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
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
				test:/\.scss$/,
				include: [
                path.resolve(__dirname, '../app/scss')
            ],
				use:ExtractTextPlugin.extract({
					use:[{
					loader:'css-loader',options:{
						sourceMap:true
					}
				},{
					loader:'sass-loader',options:{
						sourceMap:true
					}
				}]
			})
			},
			{
				test:/\.woff2$/,
				loader:'file-loader?name=fonts/[name].woff2'
			}
		]
	},
	resolve:{
		modules:['../../node_modules']  //so we can use `import angular from 'angular'`
	},
	devtool:'source-map',
	plugins:[
		new webpack.optimize.CommonsChunkPlugin({
			name:'vendor'
		}),
		new ExtractTextPlugin('styles.css')
	]
}