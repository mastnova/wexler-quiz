const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  context: `${__dirname}/app`,
  entry: {
    main: './main.js'
  },
  output: {
    path: `${__dirname}/dist`,
    publicPath: '/',
    filename: '[name].js'
  },

  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /\/node_modules\//,
      loader: 'babel?presets[]=es2015'
    }, {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader?minimize!postcss-loader')
    }, {
      test: /\.css$/,
      loader: 'file-loader?name=css/[name].[ext]'
    }, {
      test: /\.html$/,
      loader: 'file-loader?name=[name].[ext]'
    }
    ]
  },

  postcss: function () {
    return [require('postcss-cssnext'), require('precss')];
  },

  plugins: [
    new webpack.ProvidePlugin({
      jQuery: 'jquery/dist/jquery.min.js',
    }),
    new ExtractTextPlugin('css/[name].css'),
    new CopyWebpackPlugin([
      { from: 'index.html' },
      { from: 'images', to: 'images' }
    ]),
  ],

  devServer: {
    host: 'localhost',
    port: 8080,
    outputPath: './dist',
    contentBase: `${__dirname}/dist`,
    proxy: {
      '*': 'http://localhost:3000'
    }
  }
};
