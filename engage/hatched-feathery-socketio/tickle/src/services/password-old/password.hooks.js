const { hashPassword, protect } =
  require("@feathersjs/authentication-local").hooks

const sendPasswordReset = require("../../hooks/send-password-reset")
const resetPassword = require("../../hooks/reset-password")

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [hashPassword("password"), resetPassword()],
    remove: [],
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [sendPasswordReset()],
    update: [],
    patch: [],
    remove: [],
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },
}
