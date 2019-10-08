const SkeletonWebpackPlugin = require('vue-skeleton-webpack-plugin')
const path = require('path')

module.exports = {

  publicPath: process.env.NODE_ENV === 'production'? '/' : './',

  page:{
    index: {
      entry: './src/main.js', // page的入口文件
      template: './public/index.html', // 模板来源
      filename: 'index.html', // 打包后的html文件名
      title: '', // 页面的title
      chunks: ['chunk-vendors', 'chunk-common', 'index'] // 提取出来的通用 chunk 和 vendor chunk。
    },
    // 当使用只有入口的字符串格式时，
    // 模板会被推导为 `public/subpage.html`
    // 并且如果找不到的话，就回退到 `public/index.html`。
    // 输出文件名会被推导为 `subpage.html`。
    subpage: 'src/subpage/main.js'
  },

  css: {
    extract: true, // css拆分ExtractTextPlugin插件，默认true - 骨架屏需要为true
  },

  // 配置webpack插件
  configureWebpack: (config)=>{
    config.plugins.push(new SkeletonWebpackPlugin({
      webpackConfig: {
        entry: {
          app: path.join(__dirname, './src/utils/skeleton.js'),
        },
      },
      minimize: true,
      quiet: true,
    }))
  },

  // 开发环境的服务器配置
  devServer: {
    port: 7777
  }

}