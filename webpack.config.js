var rules = require("./Frecl/Build/rules");
var getPlugins = require("./Frecl/Build/plugins");
var resolve = require("./Frecl/Build/resolve");
var getOutput = require("./Frecl/Build/output");
var getEntry = require("./Frecl/Build/entry");


module.exports = {
  devtool: process.env.EXE_ENV === 'production' ? false : 'eval-source-map',
  entry: getEntry(process.env.NODE_ENV),
  output: getOutput(process.env.EXE_ENV),
  module: {
    rules
  },
  plugins: getPlugins(process.env.NODE_ENV, process.env.EXE_ENV),
  resolve
};
