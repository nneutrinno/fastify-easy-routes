const addMethod = route => {
  const method = route.fileName.split(".")[0]

  return {
    method,
    ...route
  }
}

module.exports = addMethod