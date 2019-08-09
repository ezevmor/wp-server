//use absolute paths
module.exports = {
  entry: `${__dirname}/src/main.js`,
  output: {
    path: `${__dirname}/dist`,
    filename: 'app.js'
  },
  indexhtml: `${__dirname}/src/index.html`
};
