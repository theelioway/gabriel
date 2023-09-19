const MongoClient = require("mongodb").MongoClient

module.exports = function (app) {
  const connection =
    "mongodb+srv://funtech:curdle-plaything-tibia-gloma@funtyperdb.vmcoc.mongodb.net/funtyperDB?retryWrites=true&w=majority"
  const mongoClient = MongoClient.connect(connection, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then((client) => client.db("funtyperDB"))
  app.set("mongoClient", mongoClient)
}
