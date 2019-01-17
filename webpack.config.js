const version = (+new Date)
const fs = require("fs");

module.exports = {
	watch: true,
	mode: 'production',
	entry: "./assets/app.js",
	output: {
		path: `${__dirname}/static/js`,
		filename: "app." + version + ".js"
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
					},
					{
						loader: 'sass-loader',
					}
				]
			}
		]
	},
	devServer: {
		contentBase: `${__dirname}`,
		watchContentBase: true,
		publicPath: '/static/js',
    port: 3000,
    open: true,
		hot: true
	},
}

let static_file = JSON.parse(fs.readFileSync(`${__dirname}/static_file_version.json`));
let old_version = static_file.version;
static_file.version = version;
fs.writeFileSync(`${__dirname}/static_file_version.json`, JSON.stringify(static_file, null, ''));
try {
	fs.unlink(`${__dirname}/static/js/app.${old_version}.js`, function(){});
}catch(err) {
	console.log(err);
}
