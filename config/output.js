var path = require('path');

var projectPath;
if(process.env.NODE_ENV == 'production'){
   projectPath = path.resolve(__dirname, '../dist');
}else{
   projectPath = path.resolve(__dirname, './dist');
}

module.exports = {
  path: projectPath,
  publicPath: '/dist/',
  filename: 'build.js',
  // path: path.resolve(__dirname, '../dist'), //__dirname, '../dist'
  // publicPath: process.env.NODE_ENV == 'production' ? './../../../dist/' : '',
  // filename: '[name]-build.js' // '[name]-[hash].js'
};
