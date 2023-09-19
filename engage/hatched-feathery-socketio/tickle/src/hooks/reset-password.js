/* eslint-disable require-atomic-updates */
module.exports = function (options = {}) {
  // eslint-disable-line no-unused-vars
  return async (context) => {
    // Get `app`, `method`, `params` and `result` from the hook context
    const { app, data, method, result, params } = context
    let { email, secret } = result
    const searchResults = await app.service("users").find({ email })
    if (searchResults) {
      const user = searchResults.data.find((u) => u.email === email)
      if (method === "create") {
        await app.service("users").patch(user._id, { secret })
        context.result = {
          url: "http://localhost:3000/?secret=" + secret,
        }
      }
      // else if (method === "patch") {
      //   if (user.secret !== secret) {
      //     throw "Reset password failed."
      //   } else {
      //     await app.service("users").patch(user._id, { password: newPassword })
      //   }
      // }
    }
    return context
  }
}
