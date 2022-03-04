const { merge } = require('webpack-merge')
const common = require('./webpack.common')

module.exports = merge( common, {
  mode: 'production',
  stats: 'errors-only',
  /* 清除上次打包的文件 */
  // plugins: [
  //   new CleanWebpackPlugin(),
  // ],
})