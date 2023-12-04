const should = require("chai").should()

const letterSets = [
  ["a", "s", "l", ";"],
  ["d", "k"],
  ["f", "j"],
  ["g", "h"],
  ["q", "p"],
  ["w", "o"],
]

const wordSets = [
  [
    "lass",
    "all",
    "sals",
    "al",
    "la",
    "skald",
    "skalds",
    "ask",
    "asks",
    "lad",
    "oslo",
    "flask",
    "flak",
    "jafa",
    "jafas",
    "jass",
    "flag",
    "flags",
    "glass",
    "flash",
    "gash",
  ],
]

const TARGET = [
  ["lass", "all", "sals", "al", "la"],
  ["skald", "skalds", "ask", "asks", "lad"],
  ["flask", "flak", "jafa", "jafas", "jass"],
  ["flag", "flags", "glass", "flash", "gash"],
  [],
  ["oslo"],
  [],
]

describe("module | funtyperDictionary", function () {
  it("fetches funtyperDictionary", () => {
    coverWordSets(letterSets, wordSets).should.eql(TARGET)
  })
})
