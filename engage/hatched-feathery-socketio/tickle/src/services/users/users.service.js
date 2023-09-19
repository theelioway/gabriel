// Initializes the `users` service on path `/users`
const { Users } = require("./users.class")
const createModel = require("../../models/users.model")
const hooks = require("./users.hooks")

module.exports = function (app) {
  const Model = createModel(app)
  const paginate = app.get("paginate")

  const options = {
    Model,
    paginate,
  }

  app.use("/users", new Users(options, app))

  const service = app.service("users")

  service.hooks(hooks)
}
