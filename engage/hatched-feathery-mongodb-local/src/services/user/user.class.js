const { Service } = require("feathers-mongodb")

exports.User = class User extends Service {
  constructor(options, app) {
    super(options)
    app.get("mongoClient").then((db) => {
      this.Model = db.collection("user")
      this.Model.createIndex({ email: 1 }, { unique: true })
      this.Model.createIndex({ userName: 1 }, { unique: true })
      this.Model.createIndex({
        firstName: "text",
        lastName: "text",
        userName: "text",
      })
    })
  }
  find(params) {
    return super.find(params)
  }
  create(data, params) {
    const { email, role } = data
    let userData = data
    switch (role) {
      case "account":
        const userName = email
        userData = {
          ...data,
          userName,
        }
        break
      case "gamer":
        const playerStarter = {
          boosters: {
            xp: false,
            life: false,
            coins: false,
          },
          keystrokeHistory: {},
          level: 1,
          preferences: {
            x: 40,
            y: 40,
          },
          targetWPM: 20,
          warmedUp: false,
        }
        userData = {
          ...data,
          ...playerStarter,
        }
        break
      default:
        // throw `Cannot create ${role} user this way.`
        break
    }
    return super.create(userData, params)
  }
  get(id, params) {
    return super.get(id, params)
  }
  patch(id, data, params) {
    return super.patch(id, data, params)
  }
  update(id, data, params) {
    return super.update(id, data, params)
  }
  remove(id, params) {
    return super.remove(id, params)
  }
}
