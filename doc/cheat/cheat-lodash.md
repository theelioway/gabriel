# cheat lodash

- <https://stackoverflow.com/questions/31683075/how-to-do-a-deep-comparison-between-2-objects-with-lodash>

```javascript
function getObjectDiff(obj1, obj2) {
  const diff = Object.keys(obj1).reduce((result, key) => {
    if (!obj2.hasOwnProperty(key)) {
      result.push(key)
    } else if (_.isEqual(obj1[key], obj2[key])) {
      const resultKeyIndex = result.indexOf(key)
      result.splice(resultKeyIndex, 1)
    }
    return result
  }, Object.keys(obj2))

  return diff
}
```

Here's an example output:

```
// Test
let obj1 = {
    a: 1,
    b: 2,
    c: { foo: 1, bar: 2},
    d: { baz: 1, bat: 2 }
}

let obj2 = {
    b: 2,
    c: { foo: 1, bar: 'monkey'},
    d: { baz: 1, bat: 2 }
    e: 1
}
getObjectDiff(obj1, obj2)
// ["c", "e", "a"]
```
