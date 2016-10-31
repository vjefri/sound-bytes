const webpack = require('webpack');
const path = require('path');
const DashboardPlugin = require('webpack-dashboard/plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:8080', // Enable websocket connection
    'webpack/hot/only-dev-server', // Perform HRM in browser, doens't reload browser on errors
    path.join(__dirname, 'src'), // App entry point
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    sourceMapFilename: 'bundle.js.map',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel'],
        exclude: /node_modules/,
      },
      {
        test: /\.scss|sass$/,
        loader: ExtractTextPlugin.extract('style', 'css!sass?'),
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css'),
      },
    ],
  },
  sassLoader: {
    includePaths: [path.resolve(__dirname, './styles')],
  },
  postcss: [autoprefixer({ browsers: ['last 2 versions'] })],
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  plugins: [
    new DashboardPlugin(), // Nice Visuals
    new webpack.HotModuleReplacementPlugin(), // Generate hot update chunks
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('css/bundle.css'),
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: './src',

    hot: true, // Enable HRM in webpack-dev-server
    inline: true, // Live reloading for entire page

    stats: 'errors-only',
    proxy: {
      '/api/*': 'http://localhost:8080',
    },
  },
};
