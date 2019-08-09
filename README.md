# wp-server
This is a distributable basic webpack development server what allows to have a single server for more than one similar javascript projects. Includes compilation for develop and production environments (babel transpilation, minification, obfuscation and maps) and autoreload http server.

## How it works
The wp-server folder can be placed anywhere (inside or outside of our project folder, even it can contain our project); it maintains the common configuration parameters into `server.config.js` and reads the specific ones from a `wp-server.config.js` that our project must be provide.
We have a preconfigured `test-app` mini project to test this server as well.

## Installation
```
npm install

// link the bin scripts build.js and server.js
npm link 
```

## Configuration
Enter to your project folder and create a `wp-server.config.js` file in the root with the paths in it:

```
//use absolute paths
module.exports = {
  entry: `${__dirname}/src/main.js`,
  output: {
    path: `${__dirname}/dist`,
    filename: 'app.js'
  },
  indexhtml: `${__dirname}/src/index.html` // the app.js created must be linked here
};
```

## Use
These are the available commands:
```
server    // launch a http server in port 9500 and load the project in the browser
buil      // creates a distribution for development
buil prod // creates a distribution for production
```

We have a `webpack.config.js` as well with a similar fixed configuration in order to test the package.json scripts with the test-app provided.
