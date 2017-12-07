var path = require('path');
var webpack = require('webpack');



var plugins = require('./plugins.js');
var devServer = require('./dev.js');
var output = require('./output.js');
var loader = require('./loader')


module.exports = {
  entry: './src/main.js',
  output:output,
  module:loader,
  resolve: {
    extensions: ['.js', '.vue', '.less', '.scss', '.css'], //后缀名自动补全
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '$src': path.resolve('src')
    }
  },
  devServer,
  plugins: process.env.NODE_ENV == 'production' ? plugins :[] ,
  performance: {
    hints: false
  },
  devtool: process.env.NODE_ENV == 'production' ? '#nosources-source-map' : '#eval-source-map',
};
