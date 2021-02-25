const path = require('path')
const fs = require('fs')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

const PAGES_DIR = `${__dirname}/src/pug/pages/`
const PAGES = fs
  .readdirSync(PAGES_DIR)
  .filter((fileName) => fileName.endsWith('.pug'))

module.exports = {
  context: path.resolve(__dirname, 'src'),

  plugins: [
    new CleanWebpackPlugin(),
    ...PAGES.map(
      (page) =>
        new HtmlWebpackPlugin({
          template: `${PAGES_DIR}/${page}`,
          filename: `./${page.replace(/\.pug/, '.html')}`
        })
    ),
    new CopyPlugin({
      patterns: [
        { from: 'images', to: 'images', noErrorOnMissing: true },
        { from: 'fonts', to: 'fonts', noErrorOnMissing: true }
      ]
    })
  ],

  module: {
    rules: [
      {
        test: /\.(eot|ttf|woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'fonts/[name].[ext]'
          }
        }
      },
      {
        test: /\.(svg|png|jpg|jpeg)(\?v=\d+\.\d+\.\d+)?$/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'images/[name].[ext]'
          }
        }
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader'
      }
    ]
  }
}
