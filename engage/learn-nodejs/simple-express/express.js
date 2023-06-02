// Import the Express module
const express = require("express")

// Create an instance of the Express application
const app = express()

// Define a route for the root URL
app.get("/", (req, res) => {
  res.send("Hello, World!")
})

// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000")
})
