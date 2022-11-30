function loader(source) {
  let loaderContext = this
  let options = loaderContext.getOptions()
  console.log(source)
  return source
}

module.exports = loader
