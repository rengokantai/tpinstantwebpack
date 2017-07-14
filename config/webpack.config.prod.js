var path = require('path');
let webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.config.base');
module.exports = {
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
			}
		]
	},
	devtool:'source-map',
	plugins:[
		new ExtractTextPlugin('styles.css'),
		new webpack.optimize.UglifyJsPlugin({
			sourceMap:true
		})
	]
}