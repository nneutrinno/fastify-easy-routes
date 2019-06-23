const addName = route => {
  const removeExtension = [/.js$/, ""]
  const removeMethod = [/^[A-Z]+\./, ""]

  const name = route.fileName
    .replace(/.js$/, "")
    .replace(...removeExtension)
    .replace(...removeMethod)

  return {
    name,
    ...route
  }
}

module.exports = addName