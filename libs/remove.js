
const remove = names => route => {
  names.map(name => {
    delete route[name]
  })
  return route
}

module.exports = remove