var path = require('path');
var SRC_DIR = path.join(__dirname, '/client/src');
var DIST_DIR = path.join(__dirname, '/public');

module.exports = {
	entry: `${SRC_DIR}/index.jsx`,
	output: {
		filename: 'bundle.js',
		path: DIST_DIR
	},
	externals: {
    	'styled-components': {
      		commonjs: 'styled-components',
      		commonjs2: 'styled-components',
      		amd: 'styled-components'
    	}
  	},
	module: {
		rules: [
		{
			test: /\.jsx?/,
			include: SRC_DIR,
			use: {
				loader: 'babel-loader',
				query: {
					presets: ['@babel/preset-react', '@babel/env']
				}				
			}
		}]
	}

}