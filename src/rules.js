var rulesObj = {
  javascript: {
    test: /\.(t|j)sx?$/,
    exclude:  /(node_modules|custom_modules)/,
    use: "awesome-typescript-loader"
  }, 
  styles: {
    test: /\.(s?css)/,
    use: ["style-loader" , "css-loader", "postcss-loader", "sass-loader"]
  },
  images: {
    test: /\.(jpe?g$|gif|png)$/i,
    use: ["url-loader", "img-loader"]
  }, 
  markdown:{
    test: /\.md$/,
    use: ["html-loader", "markdown-loader"]
  },
  files: {
    test: /\.(txt|svg)$/,
    use: "file-loader"
  }
}


module.exports = Object.values(rulesObj);