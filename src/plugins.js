var {HotModuleReplacementPlugin, NoEmitOnErrorsPlugin, LoaderOptionsPlugin, optimize} = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin');
var autoprefixer = require('autoprefixer');
var {CheckerPlugin} = require('awesome-typescript-loader');

const prodPlugins = [
  new CleanWebpackPlugin(['build/*'], {
    "verbose": true // Write logs to console.
  }),
  new optimize.CommonsChunkPlugin({
    name: 'vendor',
    filename: 'vendor-[hash].min.js',
  }),
  new CheckerPlugin()
]

const devPlugins = [
  new HotModuleReplacementPlugin(),
]


const getDefaultPlugins = (executionEnvironment, bugherd, heap, title, mixpanel) => {
  return [
    new NoEmitOnErrorsPlugin(),
    new LoaderOptionsPlugin({
      options: {
        postcss: () => {
          return [autoprefixer]
        }
      }
    }),
    new HtmlWebpackPlugin({
      template: "./app/index.prod.ejs",
      environment: executionEnvironment,
      bugherd,
      heap,
      title,
      mixpanel,
      inject: 'body',
      favicon: "./app/favicon.ico"
    }),
    new ContextReplacementPlugin(/moment[\/\\]locale$/, /en/),
  ]
}

module.exports = (environment, executionEnvironment, bugherd, heap, title, mixpanel) => {
  if (environment === "production"){
    return [
      ...getDefaultPlugins(executionEnvironment, bugherd, heap, title, mixpanel),
      ...prodPlugins
    ]
  } else {
    return [
      ...getDefaultPlugins(executionEnvironment, bugherd, heap, title, mixpanel),
      ...devPlugins
    ]
  }
}