# MochaJs and ChaiJS Cheat Sheet

## Package.json

`--exit` is important when testing against servers like express or mongoose.

```
"scripts": {
  "test": "mocha --exit --timeout 10000"
}
```

## Require

```
const should = require('chai').should()

import { should } from "chai"
should()

describe("Doc | MochaJs and ChaiJS Cheat Sheet", () => {
  it("always passes this test", () => {
    true.should.be.ok
  })
  it.skip("skip skippity skips this test", () => {
      [1, 2, 3].should.have.members([2, 3])
  })
  it.only("runs this test", () => {
    {key: "pen"}.should.have.key("key")
  })
})
```

## Basics

```
object
  .should.be.a('string')
  .should.deep.equal(expected) // same as .eql
  .should.equal(expected)
  .should.eql(expected)        // deep equality
  .should.exist
  .should.be.ok(val)
  .should.be.true
  .should.be.false
  .should.be.null
  // You cannot do this since if the thing being tested is undefined then it won't have a `should` property.
  .should.be.undefined
  .should.be.empty
  .should.be.arguments
  .should.be.function
  .should.be.instanceOf
  .should.be.gt(5)
  .should.be.gte(5)
  .should.be.lt(5)
  .should.be.lte(5)
  .should.include(val)
  .should.respondTo('bar')
  .should.satisfy((n) => n > 0)
  .should.have.members([2, 3, 4])
  .should.have.keys(['foo'])
  .should.have.key('foo')
  .should.have.lengthOf(3)

() => { ··· }
  .should.throw(/not a function/)
```

## Should not

```
object
  .should.not.equal('x')
```

## Should: chains

These don't do anything and can be chained.

```
.to .be .been .is .that .and .have .with .at .of .same
```

## Chai with jQuery

```
global.jQuery = ···
chai.use(require('chai-jquery'))

expect($body)
  .should.have.attr('foo')
  .should.have.prop('disabled')
  .should.have.css('background')
  .should.have.css('background-color', '#ffffff')
  .should.have.data('foo')
  .should.have.class('active')
  .should.have.id('id')
  .should.have.html('<em>hi</em>')
  .should.have.text('hello')
  .should.have.value('2013')
  .should.be.visible
  .should.be.hidden
  .should.be.checked
  .should.be.selected
  .should.be.enabled
  .should.be.disabled
  .should.be.empty
  .should.exist
  .should.contain('text')
  .should.have('.selector')
```

## Test Suite

```
for (let [startAt, tests] of Object.entries({
  1: {
    0: 1,
    1: 1,
    2: 2,
    3: 3,
  },
  2: {
    0: 0,
    1: 2,
    2: 4,
    3: 6,
  }
})) {
  describe(`class | Crispr | ${model} modelMaker in space`, () => {
    for (let [param, asExpected] of Object.entries(tests)) {
      it.only(`${model} at param ${param}`, () => {
        let res = startAt * param
        res.should.be.eql(asExpected)
      })
    }
  })
}
```

## Build results

```
before(() => {
  this.jay = {}
})

after(() => {
  fs.writeFileSync(`./expected.json`, JSON.stringify(this.jay))
})

test(() => {
  let res = testFunc(param)
  this.jay[param] = res
})
```

## Thanks

- [Rico](https://devhints.io/chai)
- [Noël Macé](https://dev.to/open-wc/shared-behaviors-best-practices-with-mocha-519d)
