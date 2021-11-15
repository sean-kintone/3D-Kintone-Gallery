const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",

  entry: {
    "index": "./src/index.js"
  },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
    }),
  ],

  resolve: {
    extensions: ['.js', '.json']
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader', // https://webpack.js.org/loaders/babel-loader/#root
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};