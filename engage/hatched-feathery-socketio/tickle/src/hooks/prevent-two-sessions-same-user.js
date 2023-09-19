module.exports = (options = {}) => {
  return async (context) => {
    const { app, params, result } = context
    let _id = result.user?._id
    let liveUsers = app
      .channel("authenticated")
      .connections.map((c) => c.user._id)
      .filter((uId) => uId === _id)
    if (liveUsers && liveUsers.length) {
      app.service("authentication").remove(_id, params)
      throw new Error("Already logged in.")
    }
    return context
  }
}
