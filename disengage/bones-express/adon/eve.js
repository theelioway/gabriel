"use strict"

const slug = require("mollusc")

const uniquefy = require("../../lib/uniquefy")

module.exports = (schema, options) => {
  schema.add({
    identity: String,
    slug: {
      type: String,
      unique: [true, "A record with this alternative name already exists."],
      maxlength: [255, "A 255 character or less unique slug for the item."],
    },
    seo: {
      type: String,
      maxlength: [
        255,
        "A 255 character or less unique set of keywords for the item.",
      ],
    },
  })
  schema.pre("save", function (next) {
    this.identity = options.identity
    this.slug = slug(this.disambiguatingDescription)
    this.seo = uniquefy.uniquefy(this.slug)
    next()
  })

  if (options && options.index) {
    schema.path("slug").index(options.index)
  }
}
