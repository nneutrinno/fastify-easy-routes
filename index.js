const fsReaddirRecursive = require("fs-readdir-recursive")
const path = require("path")
const { promises: fsPromise } = require("fs")
const _ = require("lodash")

module.exports = ({ path: folderPath = process.env.PWD + "/routes" }) => (app, options, next) => {
  const dir = fsReaddirRecursive("./routes")
  const toObject = path => {
    return {
      path
    }
  }
  const addFileName = require("./libs/addFileName")
  const addName = require("./libs/addName")
  const addMethod = require("./libs/addMethod")
  const addURL = require("./libs/addURL")
  const remove = require("./libs/remove")

  const routes = dir
    .map(toObject)
    .map(addFileName)
    .map(addName)
    .map(addMethod)
    .map(addURL)
    .map(remove(["fileName", "name"]))

  console.log(routes)

  routes.forEach(route => {
    const handler = require([folderPath, route.path].join('/'))(app)

    app.route({
      ...route,
      handler
    })
  })

  const jsonRoutes = JSON.stringify(routes.map(remove(["path"])), null, 2)

  fsPromise.writeFile("routes.json", jsonRoutes)

  next()
}
