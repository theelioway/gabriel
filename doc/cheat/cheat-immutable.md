# cheat immutable.js

```javascript
// ## List:
// `List()`: Create an empty List.
const emptyList = Immutable.List()
// `List.of(...values)`: Create a List from provided values.
const myList = Immutable.List.of(1, 2, 3)
// `list.push(value)`: Add a value to the end of the List.
const newList = myList.push(4)
// `list.pop()`: Remove and return the last value from the List.
const poppedValue = myList.pop()
// `list.set(index, value)`: Update a value at a specific index.
const updatedList = myList.set(1, 99)
// `list.delete(index)`: Remove a value at a specific index.
const deletedValue = myList.delete(0)
// `list.get(index)`: Get a value at a specific index.
const valueAtIndex = myList.get(2)
// `list.size`: Get the number of elements in the List.
const size = myList.size
// ## Map:
// `Map()`: Create an empty Map.
const emptyMap = Immutable.Map()
// `Map({ key: value })`: Create a Map with key-value pairs.
const myMap = Immutable.Map({ name: "Alice", age: 30 })
// `map.set(key, value)`: Set a key-value pair in the Map.
const updatedMap = myMap.set("age", 31)
// `map.delete(key)`: Remove a key-value pair by key.
const newMap = myMap.delete("name")
// `map.get(key)`: Get a value by key.
const value = myMap.get("name")
// `map.has(key)`: Check if a key exists in the Map.
const hasKey = myMap.has("name")
// `map.size`: Get the number of key-value pairs in the Map.
const mapSize = myMap.size
// ## Set:
// `Set()`: Create an empty Set.
const emptySet = Immutable.Set()
// `Set([values])`: Create a Set with unique values.
const mySet = Immutable.Set([1, 2, 3])
// `set.add(value)`: Add a value to the Set.
const newSet = mySet.add(4)
// `set.delete(value)`: Remove a value from the Set.
const updatedSet = mySet.delete(2)
// `set.has(value)`: Check if a value exists in the Set.
const hasValue = mySet.has(3)
// `set.size`: Get the number of values in the Set.
const setSize = mySet.size
// ## Updating Data:
// `withMutations(mutator)`: Execute a mutator function while allowing mutations.
const originalList = Immutable.List([1, 2, 3])
const updatedList = originalList.withMutations((list) => {
  list.push(4)
  list.push(5)
})
// `update(key, updater)`: Update a value in a Map.
const originalMap = Immutable.Map({ name: "Alice", age: 30 })
const updatedMap = originalMap.update("age", (age) => age + 1)
// `updateIn([...path], updater)`: Update a nested value in a Map.
const originalMap = Immutable.Map({ person: { name: "Alice", age: 30 } })
const updatedMap = originalMap.updateIn(["person", "age"], (age) => age + 1)
// `push(value)`: Add a value to a List.
const originalList = Immutable.List([1, 2, 3])
const updatedList = originalList.push(4)
// `pop()`: Remove and return the last value from a List.
const originalList = Immutable.List([1, 2, 3])
const poppedValue = originalList.pop()
// ## Merging Data:
// `merge(obj)`: Merge Map or List with another Map or List.
const map1 = Immutable.Map({ name: "Alice" })
const map2 = Immutable.Map({ age: 30 })
const mergedMap = map1.merge(map2)
// `mergeDeep(obj)`: Deep merge Map or List with another Map or List.
const map1 = Immutable.Map({ person: { name: "Alice" } })
const map2 = Immutable.Map({ person: { age: 30 } })
const mergedMap = map1.mergeDeep(map2)
// ## Filtering and Mapping:
// `filter(predicate)`: Filter values based on a predicate.
const list = Immutable.List([1, 2, 3, 4, 5])
const filteredList = list.filter((value) => value % 2 === 0)
// `map(mapper)`: Map values to a new form.
const list = Immutable.List([1, 2, 3])
const mappedList = list.map((value) => value * 2)
// ## Conversion:
// `toJS()`: Convert an Immutable data structure to a plain JavaScript data structure.
const map = Immutable.Map({ name: "Alice" })
const jsObject = map.toJS()
// `fromJS(js)`: Create an Immutable data structure from a plain JavaScript data structure.
const jsObject = { name: "Alice" }
const map = Immutable.fromJS(jsObject)
// ## Equality:
// `is(value)`: Check if two Immutable structures are equal.
const map1 = Immutable.Map({ name: "Alice" })
const map2 = Immutable.Map({ name: "Alice" })
const isEqual = map1.is(map2)
// ## Iterating:
// `forEach(callback)`: Iterate over values and execute a callback.
const list = Immutable.List([1, 2, 3])
list.forEach((value) => console.log(value))
// ## Creating a `Seq`:
// `Seq()`: Create an empty `Seq`.
const emptySeq = Immutable.Seq()
// `Seq.of(...values)`: Create a `Seq` from provided values.
const mySeq = Immutable.Seq.of(1, 2, 3)
// ## Filtering and Mapping:
// `seq.filter(predicate)`: Filter values based on a predicate.
const mySeq = Immutable.Seq.of(1, 2, 3, 4, 5)
const filteredSeq = mySeq.filter((value) => value % 2 === 0)
// `seq.map(mapper)`: Map values to a new form.
const mySeq = Immutable.Seq.of(1, 2, 3)
const mappedSeq = mySeq.map((value) => value * 2)
// ## Concatenation and Merging:
// `seq.concat(iterable)`: Concatenate two sequences.
const seq1 = Immutable.Seq.of(1, 2, 3)
const seq2 = Immutable.Seq.of(4, 5, 6)
const concatenatedSeq = seq1.concat(seq2)
// `seq.merge(iterable)`: Merge two sequences.
const seq1 = Immutable.Seq.of({ key1: "value1" })
const seq2 = Immutable.Seq.of({ key2: "value2" })
const mergedSeq = seq1.merge(seq2)
// ## Reducing:
// `seq.reduce(reducer, initial)` or `seq.reduceRight(reducer, initial)`: Reduce the sequence to a single value.
const mySeq = Immutable.Seq.of(1, 2, 3, 4, 5)
const sum = mySeq.reduce((acc, value) => acc + value, 0)
// ## Conversion:
// `seq.toSeq()`: Convert a collection to a `Seq`.
const list = Immutable.List([1, 2, 3])
const seq = list.toSeq()
// ## Iterating:
// `seq.forEach(callback)`: Iterate over values and execute a callback.
const mySeq = Immutable.Seq.of(1, 2, 3)
mySeq.forEach((value) => console.log(value))
```
