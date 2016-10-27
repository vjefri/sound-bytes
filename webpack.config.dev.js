const webpack = require('webpack');
const path = require('path');
const DashboardPlugin = require('webpack-dashboard/plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
  devtool: process.env.NODE_ENV === 'production' ? 'source-map' : 'inline-source-map',
  entry: {
    main: [
      './src/index.js',
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server',
    ],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[hash].js',
    publicPath: '/',
    sourceMapFilename: '[name].[hash].js.map',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: [`babel?${JSON.stringify({ presets: ['react', 'es2015', 'stage-0'] })}`],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!postcss-loader',
      },
    ],
  },
  postcss: [autoprefixer({ browsers: ['last 2 versions'] })],
  plugins: [
    new DashboardPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
  devServer: {
    host: '0.0.0.0',
    proxy: {
      '/api/*': 'http://localhost:8081',
    },
  },
};
