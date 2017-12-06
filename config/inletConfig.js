var path = require('path');
var webpack = require('webpack');



var plugins = require('./plugins.js');
var devServer = require('./dev.js');
var output = require('./output.js');

module.exports = {
  entry: './src/main.js',
  output,
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {}
        }
      },
      {
        test: /(\.css|\.scss|\.less)$/,
        loaders: ['style-loader', 'css-loader', 'less-loader', 'sass-loader']
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: "url-loader?limit=50000&name=[name][hash:8].[ext]"
      },
      {
        test: /\.(yysa)\w*/,
        loader: 'file-loader'
      }
    ]
  },
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
