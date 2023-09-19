/* eslint-disable require-atomic-updates */
module.exports = function (options = {}) {
  // eslint-disable-line no-unused-vars
  return async (context) => {
    // Get `app`, `method`, `params` and `result` from the hook context
    const { app, data, method, result, params } = context
    let { password, secret } = data
    const searchResults = await app.service("users").find({ secret })
    if (searchResults) {
      const user = searchResults.data[0]
      if (method === "patch") {
        await app
          .service("users")
          .patch(user._id, { password, secret: undefined })
        context.data = {
          message: "Password reset.",
        }
      }
    }
    return context
  }
}
