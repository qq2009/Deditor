const path = require('path')

module.exports = {
  entry: './project/main.ts',
  output: {
    filename: 'deditor.js',
    path: path.resolve(__dirname, './dist')
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader'
      },
      {
        test: /\.css$/,
        loader: 'css-loader'
      }
    ]
  },
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, "./test"),
    compress: true,
    port: 9000
  }
}
