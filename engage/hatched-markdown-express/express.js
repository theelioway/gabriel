const express = require("express")
const fs = require("fs")
const { marked } = require("marked")

const app = express()

// Set the view engine to use EJS templates
app.set("view engine", "ejs")

// Define a route for the root URL
app.get("/", (req, res) => {
  // Read the 'doc' directory
  fs.readdir("../../../doc", (err, files) => {
    if (err) {
      console.error(err)
      res.status(500).send("Internal Server Error")
      return
    }

    // Filter the list of files to include only Markdown files.
    const markdownFiles = files.filter((file) => file.endsWith(".md"))

    // "Map" the list to an html bullet list.
    let htmlFileList = markdownFiles
      .map((file) => `<li><a href="/doc/${file}">${file}</a></li>`)
      .join("")

    // Send this html.
    res.send(htmlFileList)
  })
})

// Define a route for serving Markdown files as HTML
app.get("/doc/:file", (req, res) => {
  // Extract the fileName of the markdown file.
  const fileName = req.params.file

  // Path of `gabriel/doc` relative to `gabriel/engage/learn-nodejs/markdown-express`
  const filePath = `../../../doc/${fileName}`

  // Read the Markdown file
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error(err)
      res.status(404).send("File Not Found")
      return
    }

    // Convert Markdown to HTML
    const html = marked(data)

    // Render the 'markdown' view with the converted HTML
    res.send(html)
  })
})

// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000")
})
