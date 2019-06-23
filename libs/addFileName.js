module.exports = addFileName = route => {
  const fileName = route.path.split("/").slice(-1)[0]
  return {
    fileName,
    ...route
  }
}