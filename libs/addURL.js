const _ = require('lodash')
const addURL = route => {
  const { path, name } = route
  const toURL = name => {
    return name
      .replace(/([a-z])([A-Z])/, '$1-$2')
      .split('.').join('/')
      .toLowerCase()
  }
  const directories = path
    .split("/")
    .slice(0, -1)
    
  const url = Array(1)
    .concat(directories)
    .concat(name)
    .map(toURL)
    .join("/")
  return {
    url,
    ...route
  }
}

module.exports = addURL