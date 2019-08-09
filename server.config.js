const currentPath = process.cwd(); // where process has been executed
const userConfig = require(`${currentPath}/wp-server.config`);
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: userConfig.entry,
  output: userConfig.output,
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
      from: userConfig.indexhtml
    }])
  ]
}