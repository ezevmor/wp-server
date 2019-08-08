const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './test-app/src/main.js',
  output: {
    path: __dirname + '/test-app/dist',
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
  devServer: {
    contentBase: (__dirname + '/testApp'),
    port: 9001
  },
  plugins: [
    new CopyPlugin([{
      from: './test-app/src/index.html'
    }])
  ]
};