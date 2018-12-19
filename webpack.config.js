const { WebpackPluginServe: Serve } = require('webpack-plugin-serve');

module.exports = {
  mode: 'development',
  entry: [
    './src/index.js',
    'webpack-plugin-serve/client'
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new Serve({
      host: 'localhost',
      static: ['./dist'],
      open: true
    })
  ],
  watch: true
};