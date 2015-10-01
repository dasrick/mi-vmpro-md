var webpack = require('webpack');
//var ngAnnotatePlugin = require('ng-annotate-webpack-plugin');

module.exports = {
  plugins: [
    //new ngAnnotatePlugin({add: true}),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: "json-loader"
      },
      {
        test: /\.js$/,
        loader: 'ng-annotate', // works RTL - example 'ng-annotate!jshint'
        exclude: /node_modules|coverage|scripts|web/
      }
    ]
  }
  //devtool: 'inline-source-map'
};