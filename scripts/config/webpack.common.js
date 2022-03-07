const path = require('path')
const { isDev, PROJECT_PATH } = require('./../contant')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    "popup": path.resolve( PROJECT_PATH, './src/popup.tsx'),
    "background": path.resolve( PROJECT_PATH, './src/background.tsx')
  },
  output: {
    // filename: `js/[name]${isDev ? '' : '.[hash:8]'}.js`,
    filename:`js/[name].js`,
    path: path.resolve( PROJECT_PATH, './dist')
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json'],
    alias: {
      img: path.resolve(PROJECT_PATH, './images'),
      Src: path.resolve(PROJECT_PATH, './src')
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(PROJECT_PATH, './templates/index.html'),
      filename: 'popup.html',
      cache: false,
      chunks: ['popup'],
      minify: isDev ? false : {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
        removeComments: true,
        collapseBooleanAttributes: true,
        collapseInlineTagWhitespace: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        minifyCSS: true,
        minifyJS: true,
        minifyURLs: true,
        useShortDoctype: true
      }
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(PROJECT_PATH, './templates/index.html'),
      filename: 'background.html',
      cache: false,
      chunks: ['background'],
      minify: isDev ? false : {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
        removeComments: true,
        collapseBooleanAttributes: true,
        collapseInlineTagWhitespace: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        minifyCSS: true,
        minifyJS: true,
        minifyURLs: true,
        useShortDoctype: true
      }
    }),
    new CopyPlugin({
      patterns: [
        { from: "public", to: "./" },
        { from: "images", to: "./" },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(tsx?|js)$/,
        loader: 'babel-loader',
        options: { cacheDirectory: true },
        exclude: /node_modules/,
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: false,
              sourceMap: isDev,
              importLoaders: 1
            }
          },
          {
            loader: 'less-loader',
            options: {
              sourceMap: isDev,
              lessOptions: {
                javascriptEnabled: true,
              }
            },
          },
        ]
      },
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10 * 1024,
              name: '[name].[contenthash:8].[ext]',
              outputPath: 'assets/images',
            },
          },
        ],
      }
    ]
  }
}