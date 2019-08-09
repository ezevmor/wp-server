#!/usr/bin/env node
const webpack = require('webpack');
const config = require('../server.config');
const [,, ...args] = process.argv;

if (args.length > 0 && args[0] === 'prod') {
  config.mode = 'production'
}

process.chdir(__dirname);

webpack(config).run((err, stats) => {
  err && console.log(`${err}`);
  stats && console.log(`${stats}`);
});
