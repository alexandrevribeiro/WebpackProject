var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
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
  }
};
