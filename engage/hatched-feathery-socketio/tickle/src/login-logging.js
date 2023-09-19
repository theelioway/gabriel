const hoursDelta = (d1, d2) => Math.abs(d1 - d2) / 36e5

const logOutOrDisconnect = (app, user) => {
  app.service("users").patch(user._id, {
    totalPlayTime: user.totalPlayTime + hoursDelta(new Date(), user.lastLogin),
    totalPlays: user.totalPlays + 1,
  })
}

module.exports = (app) => {
  app.on("login", ({ user }) => {
    app.service("users").patch(user._id, { lastLogin: new Date() })
  })
  app.on("logout", ({ user }) => {
    logOutOrDisconnect(app, user)
  })
  app.on("disconnect", ({ user }) => {
    // If not anon
    if (user) {
      logOutOrDisconnect(app, user)
    }
  })
}
