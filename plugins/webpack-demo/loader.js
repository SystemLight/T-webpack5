function loader(source) {
  let loaderContext = this
  let options = loaderContext.getOptions()
  return source
}

module.exports = loader
