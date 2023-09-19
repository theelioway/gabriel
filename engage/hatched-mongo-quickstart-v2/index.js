const MongoClient = require("mongodb").MongoClient

let cnn = process.argv[2]

const client = new MongoClient(cnn)

async function run() {
  try {
    await client.connect()
    const database = client.db("funtyperDb")
    const butlersCollection = database.collection("butlers")
    let deleteResult = await butlersCollection.deleteMany({ role: "butler" })
    console.log({ deleteResult })
    await butlersCollection.insertOne({ name: "james", role: "butler" })
    await butlersCollection.insertOne({ name: "gabriel", role: "butler" })
    await butlersCollection.insertOne({ name: "jacques", role: "butler" })
    const butlers = await butlersCollection.find({ role: "butler" })
    await butlers.forEach((butler) => console.log(butler))
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close()
  }
}

run().catch((err) => console.log(String(err)))
