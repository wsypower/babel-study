/*
 * @Description: 
 * @Author: wsy
 * @Date: 2023-03-07 16:40:30
 * @LastEditTime: 2023-03-07 16:52:21
 * @LastEditors: wsy
 */
module.exports = {
  entry: './src/index.js',
  mode: 'development',
  devtool: false,
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist',

  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      }
    ]
  }
};
