# Concat Webpack Plugin

A Webpack plugin to run [concat](https://www.npmjs.com/package/concat) on the output files of webpack.

## How to use it

This a pretty straight forward plugin. All you need to do is install the plugin and add it to the webpack config.
It takes a single parameter which is the output file path.

```bash
npm install --save-dev concat-webpack-plugin
```

```js
// webpack.config.js
const { ConcatWebpackPlugin } = require('concat-webpack-plugin');

module.exports = {
  output: {
    // The plugin will concat all the ".js" files it finds in this folder after compilation
    path: 'dist/project', 
  },
  plugins: [
    new ConcatWebpackPlugin('dist/concatenated/main.js'),
  ],
};
```
