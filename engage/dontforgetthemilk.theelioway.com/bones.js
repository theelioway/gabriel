const express = require("express")
const { engine } = require("express-handlebars")
const bodyParser = require("body-parser")
const thing = require("./thing.json")

const port = thing.url.split(":").slice(-1).pop()

const app = express()
app.engine("handlebars", engine())
app.set("view engine", "handlebars")
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", (req, res) => {
  res.render("home", { thing })
})

app.post("/update", (req, res) => {
  const itemIdentifier = req.body.identifier
  const item = thing.ItemList.itemListElement.find(
    item => item.identifier === itemIdentifier,
  )
  item.BuyAction.actionStatus = "CompletedActionStatus"

  const allCompleted = thing.ItemList.itemListElement.every(
    item => item.BuyAction.actionStatus === "CompletedActionStatus",
  )

  if (allCompleted) {
    thing.Action.actionStatus = "CompletedActionStatus"
  }
  res.redirect("/")
})

app.listen(port, () => {
  console.log(`Checklist app is running on port ${thing.url}`)
})
