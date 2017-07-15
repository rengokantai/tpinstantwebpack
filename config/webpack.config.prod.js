var path = require('path');
let webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ChunkManifestPlugin = require('chunk-manifest-webpack-plugin');
const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.config.base');
module.exports = webpackMerge(baseConfig,{
		output:{
		filename:'[name].[chunkhash].js',
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
			}
		]
	},
	devtool:'source-map',
	plugins:[
		new ExtractTextPlugin('styles.[contenthash].css'),
		new webpack.optimize.UglifyJsPlugin({
			sourceMap:true
		}),
		new ChunkManifestPlugin({
			filename:'chunk-manifest.json'
		})
	]
})