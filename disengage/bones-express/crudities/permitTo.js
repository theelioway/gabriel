/**
* @file Middleware for endpoints to handle permissions.
* @author Tim Bushell
*
* @usage
* ============================================================================ *
const { Router } = require('express')
const { mongoose } = require('mongoose')
const permitTo = require("@@elioway/mongoose-bones/bones/crudities/permitTo")
const deleteT = require('@elioway/mongoose-bones/bones/crudities/deleteT')
const T = mongoose.Model("Thing", { name: String })
let apiRouter = Router()
apiRouter.delete(`/Thing/:_id`, permitTo("delete", T), deleteT(T))
* ============================================================================ *
* @param {String} action seeking permission for.
* @param {mongoose.Model} Thing mongoose Model object.
* @returns {express.Router}
*/
"use strict"

const { PermitLevels } = require("../auth/permits")

const { getError, permissionError } = require("../utils/responseMessages")

module.exports = (action, Thing) => {
  return async (req, res, next) => {
    // console.log({ permitTo: 'req' }, req)
    // console.log({ permitTo: "reqBody" }, req.body)
    // console.log({ permitTo: "reqParams" }, req.params)
    // console.log({ permitTo: 'action' }, action)
    // console.log({ permitTo: "localsThing" }, res.locals.thing)
    await Thing.findById(req.params._id, (e, thing) => {
      if (e) {
        // General error getting this Thing.
        let err = getError(e) // console.log({ permitTo: "err" }, err)

        res.status(err.name).json(err).end()
      } else {
        // console.log({ permitTo: 'thing' }, thing)
        // Get the permission setting from the Thing.
        let permitLevel = thing.permits.get(action) // console.log({ permitTo: 'permitLevel' }, permitLevel)

        let banned = req.user.permits.get("banned") // console.log({ permitTo: 'banned' }, banned)

        let permitted = false

        if (permitLevel === PermitLevels.AUTH) {
          // Permit action on Thing if authenticated.
          permitted = !banned && req.user
        } else if (permitLevel === PermitLevels.GOD) {
          // Permit action on Thing if authenticated and owner OR is SELF
          if (req.user) {
            permitted =
              (!banned && req.user._id.equals(thing.god)) ||
              req.user._id.equals(thing._id)
          }
        } else if (permitLevel === PermitLevels.LISTED) {
          // Permit action on Thing if authenticated and in the list OR GOD or SELF
          if (req.user) {
            permitted =
              (!banned && thing.list.includes(req.user._id)) ||
              req.user._id.equals(thing.god) ||
              req.user._id.equals(thing._id)
          }
        } else {
          // PermitLevels.ANON?
          permitted = !banned
        } // console.log("{ permitTo: 'permit' }", permit)

        if (permitted) {
          // Pass the found thing done the middleware chain.
          res.locals.thing = thing
          next()
        } else {
          let err = permissionError(action, req.params.engage) // console.log({ permitTo: "err" }, err)

          res.status(err.name).json(err).end()
        }
      }
    })
  }
}
