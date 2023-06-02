const fs = require("fs")
const http = require("http")
const https = require("https")
const url = require("url")
const { StringDecoder } = require("string_decoder")
const config = require("./config")
const handlers = require("./lib/handlers")
const helpers = require("./lib/helpers")

// Define ROUTER.
const routers = {
  user: handlers.user,
  token: handlers.token,
  ping: handlers.ping,
  notFound: handlers.notFound,
}

const listener = (req, res) => {
  // Get URL and parse.
  let parsedUrl = url.parse(req.url, true)
  // Get HEADER.
  let header = req.headers
  // Request method
  var method = req.method.toLowerCase()
  // Get PATH.
  let path = parsedUrl.pathname
  let thingType = path.split("/").slice(1, 2).pop()
  let thingId = path.split("/").slice(2, 3).pop()
  // thingType = thingType.replace(/^\/+|\/+$/g, "")
  // Get QUERYSTRING.
  let qs = parsedUrl.query
  // Get DATA.
  const stringDecoder = new StringDecoder("utf-8")
  // buffered
  let packet = ""
  req.on("data", (buffer) => {
    packet += stringDecoder.write(buffer)
  })
  req.on("end", () => {
    packet += stringDecoder.end()
    packet = helpers.parseJsonToObject(packet)
    let handle = {
      header,
      method,
      thingId,
      thingType,
      qs,
      packet,
    }
    let handler = routers[thingType] || handlers.notFound
    handler(handle, (status, payload) => {
      status = status || 200
      payload = typeof payload == "object" ? payload : {}
      // Send response.
      res.setHeader("Content-Type", "application/json")
      res.writeHead(status)
      res.end(JSON.stringify(payload))
      // Log.
      console.log({ ...handle, payload })
    })
  })
}

http.createServer(listener).listen(config.httpPort, () => {
  console.log(`Server Up: ${config.httpPort}`)
})
const httpsServerOptions = {
  key: fs.readFileSync("./https/key.pem"),
  cert: fs.readFileSync("./https/cert.pem"),
}
https
  .createServer(httpsServerOptions, listener)
  .listen(config.httpsPort, () => {
    console.log(`Server Up: ${config.httpsPort}`)
  })
