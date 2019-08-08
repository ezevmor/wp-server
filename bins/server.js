#!/usr/bin/env node

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('../wp-server.config');

const server = new WebpackDevServer(webpack(config), {open: true});

server.listen(9500, 'localhost', err => {
  if (err) {
    console.log(err);
  }

  console.log('wp-server listening at localhost:9500');
})
