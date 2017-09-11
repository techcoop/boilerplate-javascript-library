const webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: {
    'boilerplate-javascript-library': './src/index.js',
    'styles': './src/styles.js'
  },
  output: {
    // TODO fix path resolve issue, webpack < 2.2.1 breaks on windows https://github.com/webpack/webpack/issues/4530
    path: path.resolve(__dirname, './out'),
    filename: '[name].js',
    library: 'BoilerplateJavascriptLibrary',
    libraryTarget: 'umd',
  },
  devtool: 'sourcemap',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'babel-loader',
          options: { presets: ['es2015'] },
        }],
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: [{
            loader: 'css-loader',
            options: { importLoaders: 1 },
          }],
        }),
      },
      {
        test: /\.(sass|scss)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            'sass-loader'
          ],
        }),
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: true,
        unsafe: true,
      },
    }),
    new ExtractTextPlugin({
      filename: 'boilerplate-javascript-library.css',
      allChunks: true,
    }),
  ],
}
