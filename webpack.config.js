var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/js/client.js',
  output: { path: './src', filename: 'client.min.js' },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react', 'stage-0']
        }
      },
      // CSS
	  {
		test: /\.styl$/,
		exclude: /(node_modules)/,
		loader: 'style-loader!css-loader!stylus-loader',
		include: path.join(__dirname, 'src/css')
	  }
    ]
  },
  plugins:[
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('production')
      }
    })],
    resolve: {
    /*alias: {
        'react': 'react-lite',
        'react-dom': 'react-lite'
    }*/
    }
};