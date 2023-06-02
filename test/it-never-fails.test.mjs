import { should } from "chai"
should()

describe("NeverFails", () => {
  it.skip("really really never fails", () => {
    true.should.be.ok
  })
})

// describe("NeverFails describe() before and after this.propertyName", () => {
//   // let var1
//   before(() => {
//     this.var1 = "hello"
//     this.var1.should.equal("hello")
//   })
//
//   after(() => {
//     this.var1 = ""
//     this.var1.should.equal("")
//   })
//
//   it.skip("properly never fails", () => {
//     this.var1.should.equal("hello")
//   })
// })

// SHAREDBEHAVIOUR
// sharedBehaviours.userNameIsPresent.js
function userNameIsPresent(buildUserFn, { first, last }) {
  beforeEach(() => {
    this.userLike = buildUserFn()
  })

  it.skip("is a useful utlity", () => {
    this.userLike.first.should.be.equal(first)
    this.userLike.last.should.be.equal(last)
  })
}

describe("NeverFails sharedBehaviour", () => {
  userNameIsPresent(() => new Object({ first: "engage", last: "" }), {
    first: "engage",
    last: "",
  })
})

function freezeDate() {
  return new Date("1983-06-12")
}
let originalDateNow = Date.now
describe("NeverFails Freeze Dates in Tests Example", () => {
  beforeEach(() => {
    Date.now = freezeDate
  })

  afterEach(() => {
    Date.now = originalDateNow
  })

  it("travelled back in time to olden days", () => {
    Date.now().should.eql(new Date("1983-06-12"))
  })
})

// TEST QUEUE: EXAMPLE
let testQueue = {
  1: {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
  },
  2: {
    0: 0,
    1: 2,
    2: 4,
    3: 6,
  },
}
for (let [startAt, tests] of Object.entries(testQueue)) {
  describe(`NeverFails testQueue | testId ${startAt}`, () => {
    for (let [multiplee, asExpected] of Object.entries(tests)) {
      it.skip(`should calculate | testId ${startAt} * ${multiplee}`, () => {
        let res = startAt * multiplee
        res.should.be.eql(asExpected)
      })
    }
  })
}
