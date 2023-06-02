const users = require("./users/users.service.js")
const messages = require("./messages/messages.service.js")
// const sagePay = require("./sage-pay/sage-pay.service.js")
const password = require("./account/password.service.js")
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users)
  app.configure(messages)
  // app.configure(sagePay)
  app.configure(password)
}
