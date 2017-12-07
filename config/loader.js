module.exports = {
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
      loader: "url-loader?limit=20000&name=img/[name][hash:8].[ext]"
    },
    {
      test: /\.(eot|ttf|woff|woff2)\w*/,
      loader: "url-loader?limit=20000&name=fonts/[name].[ext]"
    }
  ]
}
