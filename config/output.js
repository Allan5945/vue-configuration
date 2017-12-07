var path = require('path');

var projectPath, publicPath;

if (process.env.NODE_ENV == 'production') {
  projectPath = path.resolve(__dirname, './../dist');
  publicPath = './dist/'
} else {
  projectPath = path.resolve(__dirname, './dist');
  publicPath = '/dist/'
}
module.exports = {
  path: projectPath,
  publicPath: publicPath,
  filename: 'build.js',
};
