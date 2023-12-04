// TODO: MOVING SECTION TO gabriel
/** @file Create a unique hashes.
 * @credit https://stackoverflow.com/a/52171480/4464683
 */
export const cyrb53 = function (n, seed) {
  let str = n.toString()
  let h1 = 0xdeadbeef ^ seed,
    h2 = 0x41c6ce57 ^ seed
  for (let i = 0, ch; i < str.length; i++) {
    ch = str.charCodeAt(i)
    h1 = Math.imul(h1 ^ ch, 2654435761)
    h2 = Math.imul(h2 ^ ch, 1597334677)
  }
  h1 =
    Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^
    Math.imul(h2 ^ (h2 >>> 13), 3266489909)
  h2 =
    Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^
    Math.imul(h1 ^ (h1 >>> 13), 3266489909)
  return 4294967296 * (2097151 & h2) + (h1 >>> 0).toString(16)
}

/**
 * @file Return a list of indexes for arr where the indexes which come earlier
 * in the list are more freakish!
 * @param {Array} arr, e.g. ["a", "b", "c"]
 * @returns {Array} e.g. [0, 0, 0, 1, 1, 2]
 */
export const freakquency = (arr) => {
  let freaks = []
  for (let i = 0; i < arr.length; i++) {
    freaks = freaks.concat(new Array(arr.length - i).fill(i))
  }
  return freaks
}

/**
 * @file Spinkles punctuation and other things into a list of words.
 * @param {Array} wordList you have already generated in your chosen language.
 * @param {Object} opts to control the output. // { densage, punctuate, }
 * @returns {Array} of words with punctuation inserted.
 */
export const puncture = (wordList, opts) => {
  if (!opts) opts = {}
  if (!opts.punctuate) opts.punctuate = [","]
  if (!opts.densage) opts.densage = 100
  // Pick punctuation from the opts.punctuate where the earliest punc
  // appears more frequenctly. This could also be achieved by listing them
  // more often, e.g.: [",", ",", ",", ",", ",", ";", ";", ":"]
  let puncFreaks = freakquency(opts.punctuate)
  // An eighth of the total wordList.
  let eighth = Math.round(wordList.length / 8)
  // When long enough to puncture without looking unrealistic
  if (eighth >= 3) {
    // Place the first punctuation at least an eighth of the way in.
    let insertPoint =
      eighth +
      faker.random.number({
        min: 1,
        max: eighth,
      })
    do {
      // Add punctuation according to densage (percentage).
      if (
        faker.random.number({
          min: 0,
          max: 100,
        }) <= opts.densage
      ) {
        // This is where we "Pick punctuation from the opts.punctuate where the
        // earliest punc appears more frequenctly"
        let puncIndex = faker.random.objectElement(puncFreaks)
        let punc = opts.punctuate[puncIndex]
        // Insert it.
        wordList.splice(insertPoint, 0, punc)
        // Some punctuation requires special treatment of the following word.
        if ([":", ".", "?", "!"].includes(punc)) {
          // Capitalize the following word.
          wordList.splice(
            insertPoint + 1,
            1,
            _.capitalize(_.nth(wordList, insertPoint + 1)),
          )
        }
      }
      // Move the insert point up to an eighth, and at least 3 (i.e.: 1 anyway + 1word + the punc we just added!)
      insertPoint += faker.random.number({
        min: 3,
        max: eighth,
      })
    } while (
      // Repeat... but only up to an eighth of the entire list.
      insertPoint <
      wordList.length - eighth
    )
  }
  return wordList
}

export const cloneDeepBreaking = (fieldDef) => {
  let clonedBroken = new Object()
  if (_.isPlainObject(fieldDef)) {
    for (let [k, v] of Object.entries(fieldDef)) {
      if (_.isPlainObject(v)) {
        clonedBroken[k] = cloneDeepBreaking(_.cloneDeep(v))
      } else {
        clonedBroken[k] = v
      }
    }
  }
  return clonedBroken
}

/** @file Convenient wrapper for cloning and redefining a field defintion. */
export const rePurpose = (fieldDef, fieldRedefine) => {
  // Clone from the original definition.
  let rePurposed = cloneDeepBreaking(fieldDef)
  if (_.isPlainObject(fieldRedefine)) {
    // Assign the redefined properties to the new object.
    return Object.assign(rePurposed, fieldRedefine)
  }
  return rePurposed
}

/** @file Convenient wrapper for cloning an object assigning it to a variable
while breaking the reference. */
export const reRaw = (raw) => {
  if (Array.isArray(raw)) {
    return [...raw]
  } else {
    return rePurpose(raw)
  }
}
// END SECTION BEING MOVED TO gabriel
