/**
 * @Requires
 * >> npm i --save-dev express nodemon reload
 * @Package:
 * >> "scripts": {
 * >>   "reload": "nodemon server-reload.js -e js,html,css",
 * >>   "serve": "nodemon server.js",
 * >>   ...
 * >> }
 */
import express from "express"
import http from "http"
import path from "path"
import reload from "reload"

var currentPath = process.cwd()
const runFolder = "bundle" // bundle|test
const app = express()
const DIST_DIR = path.join(currentPath, runFolder)
const HTML_FILE = path.join(DIST_DIR, "index.html")
app.use(express.static(DIST_DIR))
app.get("", (req, res) => res.sendFile(HTML_FILE))

var server = http.createServer(app)

reload(app, { files: "html" })
  .then((r) => {
    // reloadReturned is documented in the returns API in the README
    const PORT = process.env.PORT || 8088
    server.listen(PORT, () => {
      console.log(`Web server listening on port ${PORT}`)
    })
  })
  .catch((err) => {
    console.error("Reload could not start Funtyper app:", err)
  })
