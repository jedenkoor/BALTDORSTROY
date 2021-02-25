const path = require('path')
const { merge } = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const ESLintPlugin = require('eslint-webpack-plugin')

const devWebpackConfig = merge(baseWebpackConfig, {
  // DEV config
  mode: 'development',

  entry: {
    main: ['./index.js']
  },

  output: {
    filename: 'build.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [new ESLintPlugin()],
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  }
})

module.exports = new Promise((resolve, reject) => {
  resolve(devWebpackConfig)
})
