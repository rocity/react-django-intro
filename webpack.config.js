// Require our dependencies
var path = require('path')
var webpack = require('webpack')
var BundleTracker = require('webpack-bundle-tracker')

module.exports = {
  // Base directory (absolute path) for resolving the entry option
  context: __dirname,
  entry: './assets/js/index',
  output: {
    // Where the compiled bundle gets stored
    path: path.resolve('./assets/bundles/'),
    filename: '[name]-[hash].js'
  },
  plugins: [
    // Tells webpack where to store data about the bundles
    new BundleTracker({filename: './webpack-stats.json'}),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    })
  ],
  module: {
    rules: [
      // A regex that tells webpack to use the following loaders on all .js and .jsx files
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ]
  },
  resolve: {
    // Tells webpack where to look for modules
    modules: ['node_modules'],
    extensions: ['.js', '.jsx']
  }
}