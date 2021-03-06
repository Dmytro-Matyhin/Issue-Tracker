const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const clientRoot = path.resolve(__dirname, './src/client')

module.exports = {
  mode: 'development',
  entry: path.join(clientRoot, 'index.ts'),
  output: {
    path: path.resolve(__dirname, './dist'), 
    filename: "main.js",
  },

  plugins: [
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({ filename:'[name].css' }),
    new HtmlWebpackPlugin({
      template: path.join(clientRoot, 'index.html')
    })
  ],

  module: {
    rules: [{
      test: /\.(ts|tsx)$/,
      loader: 'ts-loader',
      include: [clientRoot],
      exclude: [/node_modules/]
    }, {
      test: /.(scss|css)$/,

      use: [{
        loader: MiniCssExtractPlugin.loader
      },  
      {
        loader: "css-loader",

        options: {
          sourceMap: true
        }
      }, {
        loader: "sass-loader",

        options: {
          sourceMap: true
        }
      }]
    }]
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  
  devtool: "source-map",

  optimization: {
    minimizer: [new TerserPlugin()],

    splitChunks: {
      cacheGroups: {
        vendors: {
          priority: -10,
          test: /[\\/]node_modules[\\/]/
        }
      },

      chunks: 'async',
      minChunks: 1,
      minSize: 30000,
      name: false
    }
  },

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 4000,
    liveReload: true,
    open: true,
  }
}