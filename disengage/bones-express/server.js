"use strict"

const bones = require("./app")

console.log("Hello Docker Compose!")

const start = async () => {
  bones.listen(3000, () => {
    console.log(
      {
        app: "listen",
      },
      "> listening on http://localhost:3000"
    )
  })
}

start()
