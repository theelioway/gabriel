"use strict"

const passport = require("passport")

const passportCustom = require("passport-custom")

const settings = require("../settings")

module.exports = (T) => {
  passport.use(
    "unguarded",
    new passportCustom.Strategy((req, callback) => {
      // console.log({ unGuarded: "req"}, req.params)
      // console.log({ unGuarded: "callback"}, callback)
      let myThing = null
      T.findById(settings.siteId, (e, thing) => {
        // console.log({ unGuarded: "thing"}, thing)
        if (e) {
          return callback(e)
        } else {
          // Forceably turn off the User's own authority
          // thing.permits.set("banned", true)
          return callback(null, thing)
        }
      })
    }),
  )
  return passport.authenticate("unguarded", {
    session: false,
  })
}
