
const [,, ...args] = process.argv;

const webpack = require('webpack');
const developmentConfig = require('./modules/development.config');


if (args.length > 0) {
  console.log(`con argumento ${args}`)
} else {
  console.log(`sin argumento ${args}`)
}

const compiler = webpack(developmentConfig);
compiler.run((err, stats) => {
  err && console.log(`${err}`);
  stats && console.log(`${stats}`);
});
