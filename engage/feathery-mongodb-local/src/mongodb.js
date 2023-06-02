const MongoClient = require("mongodb").MongoClient

module.exports = function (app) {
  const connection = app.get("mongodb")
  const database = "funtyperDb" // connection.substr(connection.lastIndexOf('/') + 1);
  console.log({ connection })
  console.log({ database })
  const mongoClient = MongoClient.connect(connection, {
    useNewUrlParser: true,
  }).then((client) => client.db(database))

  app.set("mongoClient", mongoClient)
}
