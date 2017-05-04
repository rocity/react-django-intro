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
    filename: '[name]-[hash].js'm
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
    loaders: [
      // A regex that tells webpack to use the following loaders on all .js and .jsx files
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        query: : {
          // Specify that we will be dealing with React code
          presets: ['react']
        }
      }
    ]
  },
  resolve: {
    // Tells webpack where to look for modules
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js', '.jsx']
  }
}