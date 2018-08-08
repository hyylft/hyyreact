module.exports = {
	entry: './src/ManageSystem.js',

	output: {
		path: './',
		filename: "index.js"
	},

	devServer: {
		inline: true,
		port: 88
	},
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel',
			query: {
				presets: ['es2015', 'react']
			}
		}]
	}
};