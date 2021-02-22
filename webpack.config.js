const webpack = require("webpack");
const path = require("path");

module.exports = {
	// entrypoint for bundle
	entry: path.resolve(__dirname, "./src/index.js"),
	// babel loader module
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ["babel-loader"],
			},
		],
	},
	resolve: {
		extensions: ["*", ".js", ".jsx"],
	},
	// bundled code destination
	output: {
		path: path.resolve(__dirname, "./dist"),
		filename: "bundle.js",
	},
	// react hot loader
	plugins: [new webpack.HotModuleReplacementPlugin()],
	// location used to serve app in browser
	devServer: {
		contentBase: path.resolve(__dirname, "./dist"),
		hot: true,
	},
};
