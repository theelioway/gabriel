const { User } = require("./user.class")
const hooks = require("./user.hooks")

module.exports = function (app) {
  const options = {
    paginate: app.get("paginate"),
  }
  app.use("/user", new User(options, app))
  const service = app.service("user")
  service.hooks(hooks)
}
