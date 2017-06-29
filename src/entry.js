const devEntry = [
  'webpack-hot-middleware/client',
  path.join(__dirname, '/app/entry.js')
]

const prodEntry = [
  path.join(__dirname, '/app/entry.js')
]

module.exports = (environment) => {
  if (environment === "development"){
    return devEntry;
  } else {
    return prodEntry;
  }
}