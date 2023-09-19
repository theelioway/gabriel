module.exports = (io) => {
  io.on("connection", function (socket) {
    socket.emit("news", { text: "A client connected!" })
    socket.on("my other event", function (data) {
      console.log("my other event", data)
    })
  })
}
