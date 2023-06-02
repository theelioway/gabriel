const mongoose = require("mongoose")
const logger = require("./logger")

let { MONGODBUSER, MONGODBPASS, MONGODBHOST, MONGODBNAME } = process.env

module.exports = function (app) {
  const connection = `mongodb+srv://${MONGODBUSER}:${MONGODBPASS}@${MONGODBHOST}/${MONGODBNAME}?retryWrites=true&w=majority`
  mongoose
    .connect(app.get("mongodb"), {
      useCreateIndex: true,
      useNewUrlParser: true,
    })
    .catch((err) => {
      logger.error(err)
      process.exit(1)
    })

  app.set("mongooseClient", mongoose)
}
