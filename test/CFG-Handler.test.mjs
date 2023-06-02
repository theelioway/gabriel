import { assign, merge } from "lodash-es"
import { should } from "chai"
should()

const MAINSCENECFGHandlerMixin = {
  mergeMAINSCENECFG: function (MAINSCENECFG) {
    return this.data.set(merge(MAINSCENECFG, this.data.values))
  },
  setMAINSCENECFG: function (key, MAINSCENECFG) {
    return this.data.set(set(this.data.values, key, MAINSCENECFG))
  },
  getMAINSCENECFG: function (key) {
    return pick(this.data.values, key)
  },
}

class Anything {}

Object.assign(Anything, MAINSCENECFGHandlerMixin)

describe("MAINSCENECFGHandlerMixin", () => {
  it("deep merge", () => {
    var o1 = {
      a: 1,
      b: 2,
      c: {
        cat: "meow",
        dog: { goes: "woof", hates: "cats" },
        rat: { goes: "week", hates: "cats", loves: "pizza" },
      },
    }
    var o2 = {
      a: "a",
      b: "b",
      c: {
        dog: { loves: "bones" },
        owl: "whoo",
        rat: { goes: "sqee", hates: "dogs" },
      },
    }
    var expected = {
      a: "a",
      b: "b",
      c: {
        cat: "meow",
        dog: { goes: "woof", hates: "cats", loves: "bones" },
        owl: "whoo",
        rat: { goes: "sqee", hates: "dogs", loves: "pizza" },
      },
    }
    merge(o1, o2).should.eql(expected)
    o1.should.eql(expected)
    o2.should.eql({
      a: "a",
      b: "b",
      c: {
        dog: { loves: "bones" },
        owl: "whoo",
        rat: { goes: "sqee", hates: "dogs" },
      },
    })
  })
  it("deep merge both ways", () => {
    var o1 = {
      a: 1,
      b: 2,
      c: {
        cat: "meow",
        dog: { goes: "woof", hates: "cats" },
        rat: { goes: "week", hates: "cats", loves: "pizza" },
      },
    }
    var o2 = {
      a: "a",
      b: "b",
      c: {
        dog: { loves: "bones" },
        owl: "whoo",
        rat: { goes: "sqee", hates: "dogs" },
      },
    }
    var expected = {
      a: 1,
      b: 2,
      c: {
        cat: "meow",
        dog: { goes: "woof", hates: "cats", loves: "bones" },
        owl: "whoo",
        rat: { goes: "week", hates: "cats", loves: "pizza" },
      },
    }
    merge(o2, o1).should.eql(expected)
    o1.should.eql({
      a: 1,
      b: 2,
      c: {
        cat: "meow",
        dog: { goes: "woof", hates: "cats" },
        rat: { goes: "week", hates: "cats", loves: "pizza" },
      },
    })
    o2.should.eql(expected)
  })
})
