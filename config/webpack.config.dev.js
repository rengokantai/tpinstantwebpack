var path = require('path');
let webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.config.base');
module.exports =webpackMerge(baseConfig,{
	output:{
		filename:'[name].js',
		path:'dist'
	},
	module:{
		rules:[
			{
				test:/\.scss$/,
				use:[
				{
					loader:'style-loader'
				},{
					loader:'css-loader',options:{
						sourceMap:true
					}
				},{
					loader:'sass-loader',options:{
						sourceMap:true
					}
				}]
			}
]
	},devtool:'eval'
})