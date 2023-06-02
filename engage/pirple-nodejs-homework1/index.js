/**
 *  pirple: Homework Assignment #1 Hello World API
 *  @Author: Tim Bushell
 *  @Date: 13 July 2021
 */
const http = require("http")
const url = require("url")
const { StringDecoder } = require("string_decoder")

const decoder = new StringDecoder("utf-8")

const routes = {
  hello(data, cb) {
    cb(200, { message: `Nice to meet you, ${data.name}.` })
  },
  default(data, cb) {
    cb(404, { message: "Use the /hello route." })
  },
}

const listener = (req, res) => {
  let route = url.parse(req.url, true).pathname.replace(/^\/+|\/+$/g, "")
  let handler = routes[route] || routes.default
  let packet = ""
  req.on("data", (buffer) => {
    packet += decoder.write(buffer)
  })
  req.on("end", () => {
    packet += decoder.end()
    handler(JSON.parse(packet), (statusCode, payload) => {
      res.setHeader("Content-Type", "application/json")
      res.writeHead(statusCode)
      res.end(JSON.stringify(payload))
    })
  })
}

http.createServer(listener).listen(5000, () => console.log("Ready to greet."))
