import {
  aMorePerfectUnion,
  measureCommonality,
} from "../elio-js-utils/aMorePerfectUnion.js"

let SameCameraSameDayFolderOfJPEGs = [
  "a-eric-lens-love-81-film-no-flash-100-18275951230.JPG",
  "b-eric-lens-love-81-film-no-flash-28-18275917368.JPG",
  "c-eric-lens-love-81-film-no-flash-111-18275826848.JPG",
  "d-eric-lens-love-81-film-no-flash-47-18275897298.JPG",
  "eric-lens-love-81-film-no-flash-24-18276036910.JPG",
  "eric-lens-love-81-film-no-flash-55-18459405842.JPG",
]

const ArrayOfTitles = [
  "[2, 3, 1, 4, 5]",
  "[5, 4, 2, 3, 1].",
  "[1, 4, 2, 3, 5]",
  "[1, 2, 3, 4, 5]",
]

describe("aMorePerfectUnion", () => {
  it("aMorePerfectUnion", () => {
    let a = ArrayOfTitles
    aMorePerfectUnion(a[0], a).should.eql("2, 3")
  })
  it.only("real data", () => {
    let a = SameCameraSameDayFolderOfJPEGs
    aMorePerfectUnion(a[0], a).should.eql("eric-lens-love-81-film-no-flash-")
  })
})

describe("measureCommonality", () => {
  it("measureCommonality", () => {
    measureCommonality(Shortest, ArrayOfTitles).should.eql({
      1: "[",
      3: "4, ",
      4: "2, 3",
    })
  })
})
