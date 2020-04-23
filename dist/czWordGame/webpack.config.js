const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    homepage: path.resolve('./dist/czWordGame/homepage/homepage.js'),
    dashboard: path.resolve('./dist/czWordGame/dashboard/dashboard.js'),
    verificationPage: path.resolve('./dist/czWordGame/homepage/verificationPage.js')
  },
  output: {
    filename: '[name].js',
    path: __dirname
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve('./dist/czWordGame/templates/index.html'),
      chunks: ['homepage']
    }),
    new HtmlWebpackPlugin({
      filename: 'dashboard.html',
      template: path.resolve('./dist/czWordGame/templates/dashboard.html'),
      chunks: ['dashboard']
    }),
    new HtmlWebpackPlugin({
      filename: 'confirmVerification.html',
      template: path.resolve('./dist/czWordGame/templates/confirmVerification.html'),
      chunks: ['verificationPage']
    })
  ]
};
