var path = require('path');
module.exports ={
	entry: './app/js/main',
	output:{
		filename:'bundle.js',
		path:'dist'
	},
	module:{
		rules:[
			{
				test:/\.scss$/,
				include: [
                path.resolve(__dirname, '../app/scss')
            ],
				use:[
				{
					loader:'style-loader'
				},{
					loader:'css-loader'
				},{
					loader:'sass-loader'
				}]
			},
			{
				test:/\.woff2$/,
				loader:'file-loader?name=fonts/[name].woff2'
			}
		]
	}
}