const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: '../app2/src/main.js',
  output: {
    path: __dirname + '/../app2/dist',
    filename: 'app.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"]
            }
          }
        ]
      }
    ]
  },
  devtool: 'inline-source-map',
  plugins: [
    new CopyPlugin([{
      from: '../app2/src/index.html'
    }])
  ]
}