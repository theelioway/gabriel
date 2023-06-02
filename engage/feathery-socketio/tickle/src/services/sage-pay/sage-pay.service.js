// Initializes the `SagePay` service on path `/sage-pay`
const { SagePay } = require("./sage-pay.class")
const hooks = require("./sage-pay.hooks")

module.exports = function (app) {
  const options = {
    paginate: app.get("paginate"),
  }

  // Initialize our service with any options it requires
  app.use("/sage-pay", new SagePay(options, app))

  // Get our initialized service so that we can register hooks
  const service = app.service("sage-pay")

  service.hooks(hooks)
}
