var webpack = require('webpack');
var path = require('path');

const VENDOR_LIBS = [
  'faker', 'lodash', 'react', 'react-dom', 'react-input-range', 
  'react-redux', 'react-router', 'redux', 'redux-form', 'redux-thunk'
];

module.exports = {
  entry: {
    bundle: './src/index.js',
    vendor: VENDOR_LIBS
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        // Remembering... The loaders are executed from the right to the left.
        // 1º) "css-loader": Allows Webpack to understand  and read the contents of CSS files
        // that are imported into the project structure.
        // 2º) "style-loader": Takes all the CSS modules and sticks them into a style tag inside
        // the index.html document.
        use: ['style-loader', 'css-loader'],
        test: /\.css$/
      }
    ]
  },
  plugins: [
    // Plugin to solve the issue of double-including the files in both bundles.
    // It tells Webpack to look at the total sum of the files in both 
    // "bundle" and "vendor" entry points, and for all modules included in the
    // dependencies structures that are identical, it will pull them out and only 
    // add them to the entry point specified below (vendor).
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    })
  ]
};
