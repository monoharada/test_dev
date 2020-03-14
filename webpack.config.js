const path = require('path');

module.exports = {
  mode: 'production', // 'production' | 'development' | 'none'
  // Chosen mode tells webpack to use its built-in optimizations accordingly.
  entry: './src/js/script', // string | object | array
  // defaults to './src'
  // Here the application starts executing
  // and webpack starts bundling
  output: {
    // options related to how webpack emits results
    path: path.resolve(__dirname, 'dist/js'), // string
    // the target directory for all output files
    // must be an absolute path (use the Node.js path module)
    filename: 'script.min.js', // string
    // the filename template for entry chunks
  },
  module: {
    // configuration regarding modules
    rules: [
      // rules for modules (configure loaders, parser options, etc.)
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        // the loader which should be applied, it'll be resolved relative to the context
        // -loader suffix is no longer optional in webpack2 for clarity reasons
        // see webpack 1 upgrade guide
        options: {
          presets: ['@babel/preset-env'],
        },
        // options for the loader
      },
    ],
  },
  devtool: 'source-map', // enum
  // enhance debugging by adding meta info for the browser devtools
  // source-map most detailed at the expense of build speed.
};