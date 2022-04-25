//const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
  mode: 'development',
  entry: {
    Wilfriedroid: './src/index.js'
  },
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: '[name].js',
    library: 'System',
    libraryTarget: 'window',
    clean: true
  },
  plugins: [new HtmlWebpackPlugin({
      title: 'Development',
      filename: '../index.html',
      template: './template/index.html',
      scriptLoading: 'blocking'
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.html$/,
        use: 'html-loader',
        exclude: [/template/]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.js'],
    alias: {
      "@src": path.resolve(__dirname, "../src/")
    }
  }
};

module.exports = config;