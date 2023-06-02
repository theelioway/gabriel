// This is the database adapter service class
const { Service } = require("feathers-nedb")

exports.Users = class Users extends Service {
  create(data, params) {
    const { email, password } = data
    const totalPlays = 0
    const totalPlayTime = 0
    const userData = { email, password, totalPlays, totalPlayTime }
    return super.create(userData, params)
  }
}
