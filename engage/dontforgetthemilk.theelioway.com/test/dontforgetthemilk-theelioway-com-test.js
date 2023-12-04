const should = require("chai").should()
const dontforgetthemilkTheeliowayCom = require("../dontforgetthemilk-theelioway-com")

describe("module | dontforgetthemilkTheeliowayCom", function (hooks) {
  it("fetches dontforgetthemilkTheeliowayCom", () => {
    dontforgetthemilkTheeliowayCom().should.equal(
      "dontforgetthemilk-theelioway-com",
    )
  })
})
