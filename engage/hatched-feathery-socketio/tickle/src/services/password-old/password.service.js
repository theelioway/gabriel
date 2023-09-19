// Initializes the `account` service on path `/account`
const { Password } = require("./password.class")
const createModel = require("../../models/users.model")
const hooks = require("./password.hooks")

module.exports = function (app) {
  const Model = createModel(app)

  const options = {
    Model,
  }

  app.use("/password", new Password(options, app))

  const service = app.service("password")

  service.hooks(hooks)
}
