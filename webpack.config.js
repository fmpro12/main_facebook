const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
	entry: './js/main.js',
	output: {
		filename: 'app.js'
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					{ loader: "style-loader" },
                    { loader: "css-loader" },
                    { loader: "sass-loader" }
				]
            },
            {
				test: /\.css$/,
				use: [
					{ loader: "style-loader" },
                    { loader: "css-loader" }                    
				]
			}
		],
	},
	devtool: "source-map",
	mode: "development",	
};

