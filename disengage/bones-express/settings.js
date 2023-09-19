"use strict"

const jwtAuthGuard = require("./auth/jwtAuthGuard")

const unGuarded = require("./auth/unGuarded")

const { PermitLevels, BasePermits, AnonPermits } = require("./auth/permits")

const { MONGODB_URL, BONES, BONES_DEPTH, EXTRA_PRIMITIVE } = process.env
module.exports = {
  guard: jwtAuthGuard,
  permits: BasePermits,
  sanitizers: {
    comment: (queryString) => {
      queryString = queryString || {}
      queryString.comment =
        queryString.hasOwnProperty("comment") &&
        String(queryString.comment) !== "false"
      return queryString
    },
    depth: (queryString) => {
      queryString = queryString || {}
      queryString.depth = Number(queryString.depth) || 0
      return queryString
    },
  },
  bones: BONES.split(",").filter((b) => b),
  depth: BONES_DEPTH || 0,
  extraPrimitive: EXTRA_PRIMITIVE.split(",").filter((b) => b),
  mongoDbUrl: MONGODB_URL || "mongodb://127.0.0.1:27017/elioway",
  slim: {
    // additionalType: 1,
    // alternateName: 1,
    // description: 1,
    disambiguatingDescription: 1,
    // identifier: 1,
    // image: 1,
    // mainEntityOfPage: 1,
    name: 1,
    // potentialAction: 1,
    // sameAs: 1,
    // subjectOf: 1,
    // url: 1,
    thing: 1,
    // god: 1,
    // created: 1,
    // createdBy: 1,
    _id: 1,
  },
}
