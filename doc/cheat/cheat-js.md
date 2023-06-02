# JS

## reduce

```javascript
reduce((previousValue, currentValue, currentIndex, array) => {
  /* ... */
}, initialValue)
// Sum result
;[1, 2, 3].reduce((acc, cur) => acc + cur, 10)
// >> 16
// Restructue an Object into an array.
Object.entries({ a: 1, b: 2, c: 3 }).reduce(
  (acc, [k, v]) => acc.concat(new Array(v).fill(k)),
  []
)
// >> ["a","b","b","c","c","c"]
// Reverse above.

Object.create(acc, { p: { value: 42 } })
new Array("a", "b", "b", "c", "c", "c").reduce(
  (acc, k) => ({ ...acc, [k]: (acc[k] || 0) + 1 }),
  {}
)
```

## Super Classing

- <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create>

```javascript
// Shape - superclass
function Shape() {
  this.x = 0
  this.y = 0
}

// superclass method
Shape.prototype.move = function (x, y) {
  this.x += x
  this.y += y
  console.info("Shape moved.")
}

// Rectangle - subclass
function Rectangle() {
  Shape.call(this) // call super constructor.
}

// subclass extends superclass
Rectangle.prototype = Object.create(Shape.prototype)

//If you don't set Rectangle.prototype.constructor to Rectangle,
//it will take the prototype.constructor of Shape (parent).
//To avoid that, we set the prototype.constructor to Rectangle (child).
Rectangle.prototype.constructor = Rectangle

var rect = new Rectangle()

console.log("Is rect an instance of Rectangle?", rect instanceof Rectangle) // true
console.log("Is rect an instance of Shape?", rect instanceof Shape) // true
rect.move(1, 1) // Outputs, 'Shape moved.'
```

## Import

```javascript
import { god } from "./cheat-js-god"
console.log(god.name === "god")

import eve, { adon } from "./cheat-js-eve"
console.log(eve.name === "eve")
console.log(adon.name === "adon")

import adon, { eve } from "./cheat-js-adon"
console.log(adon.name === "adon")
console.log(eve.name === "eve")

# from lodash-es
export { default as zipObjectDeep } from './zipObjectDeep.js';
export { default as zipWith } from './zipWith.js';
export { default } from './lodash.default.js';
```

## console.log

```javascript
console.log("%c Title", "color: red;")

let Wizard = Object({ name: "Wizard"})
let Apprentice = Object({ name: "Apprentice"})
console.log({ Wizard, Apprentice })
console.table([ Wizard, Apprentice ])


console.time("looper")
for (let x = 0; x < 1000; x++) {
  let y = x*
}
console.timeEnd("looper")

let x = () => console.trace("wtf")
x()
```

## switch

```javascript
switch (a) {
  case 1: {
    let b = a * 2
    break
  }
  case 2: {
    let b = a * 2
    break
  }
}
```

- <https://www.youtube.com/watch?v=WIP1czLm3CY>

## Destructure

Do this as much as possible. Do it at as a parameter. It shows the developer the required params.

```javascript
let obj = { a: 1, b: 2, c: 3 }

let x = ({ a, c }) => console.log(a, c)
x(obj)

let { b, c } = obj
`
```

## Templating function

```javascript
let x = (str, age) => {
  let oldness = age > 80 ? "very" : "not very"
  return `${str} is ${oldness} old`
}
let age = 4
const bio = x`This person ${age}`
```

## args

```
process.argv  ===  ["node", "javscriptFile.js", "arg1", "arg2"]
```

## Spreading

```javascript
let x = { x: "X" }
let y = { a: 1, b: 2 }
let z = { a: 1, b: 2 }

const X1 = { ...x, ...y }
const X2 = { ...x, ...z }

let x = [1, 2, 3]
let X1 = [0, ...x, 4, 5, 6]
```

## Optional Chaining

```javascript
let x = { a: { b: { c: 1, d: 2 } } }
x.a?.b
>> { c: 1, d: 2 }
x.y.b
>> Error!!!!
x.y?.b
>> undefined
```

## RegEx

```javascript
let re = /ab+c/i // literal notation
let re = new RegExp("ab+c", "i") // constructor with string pattern as first argument
let re = new RegExp(/ab+c/, "i") // constructor with regular expression literal as first argument (Starting with ECMAScript 6)
```
