var webpack = require('webpack')
var htmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = [
    new webpack.optimize.UglifyJsPlugin({
        sourceMap: true,
        compress: {
            warnings: false
        }
    }),
    new webpack.BannerPlugin('这个是文件注释标注！'),
    new webpack.LoaderOptionsPlugin({
        minimize: true
    }),
    new ExtractTextPlugin({
        filename:  (getPath) => {
            return getPath('[name].css'); //[name]-[hash].css
        },
        allChunks: true
    }),
    // new htmlWebpackPlugin(
    //     {
    //         template:"index.html",  // 指定的文件
    //     }
    // )
]
