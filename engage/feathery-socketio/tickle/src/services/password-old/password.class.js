/* eslint-disable no-unused-vars */

exports.Password = class Password extends Service {
  async patch(data, params) {
    const { action, email, password, secret } = data
    if (action === "forgot") {
      secret = Buffer.from(email + Date.now().toString())
        .toString("base64")
        .slice(0, -2)
      data.secret = secret
      data.result.url = "http://localhost:3000/?secret=" + secret
    } else if (action === "reset") {
      data.action = undefined
    }
    return super.patch(data)
  }

  async update(id, data, params) {
    return data
  }

  async patch(id, data, params) {
    return data
  }

  async remove(id, params) {
    return { id }
  }
}
