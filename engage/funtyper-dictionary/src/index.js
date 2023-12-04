const fs = require("fs")

const insertInto = (index, array, subArray) => {
  if (array.length < index + 1) {
    array.push(subArray)
  } else {
    array[index].concat(subArray)
  }
  return array
}

/** A function to ensure that WORDSETS in FunTyper, for a given RANK,
 * are covered by all the letters learnt by the student so far, or
 * is for the new letters for the current rank.
 * @tutorial
 * Words are eventally moved into the first WORDSET when all its letters are
 * covered by that rank.
 */
const coverWordSets = (letterSets, wordSets) => {
  let fuck = []
  // For each letter up to and including each ranl letterset.
  for (let rank = 0; rank < letterSets.length; rank++) {
    // Get the letters of this set + previous ones.
    const currentLetterSet = letterSets.slice(0, rank + 1).flat()
    // Get the words for this set.
    const currentWordSet = Array.from(
      new Set(wordSets.slice(rank, rank + 1).flat()),
    )
    // Get the words for the next set - a place to move words upwards if not covered.
    const nextWordSet = Array.from(
      new Set(wordSets.slice(rank + 1, rank + 2).flat()),
    )
    // A place to tally words which ARE covered.
    const keeperForCurrentWordSet = []
    // For all words in this RANK's set...
    for (let WSx = 0; WSx < currentWordSet.length; WSx++) {
      let currentWord = currentWordSet[WSx]
      // Are all its letters covered by letters for this RANK and lower?
      let currentWordCovered = currentWord
        .split("")
        .every(letter => currentLetterSet.includes(letter))

      fuck.push({ rank, currentLetterSet, currentWord, currentWordCovered })
      // If
      if (!currentWordCovered) {
        // Add to the next WORDSET (for now)
        nextWordSet.push(currentWord)
      } else {
        // Keep in this WORDSET.
        keeperForCurrentWordSet.push(currentWord)
      }
    }
    // Resolve to the "keepers" list.
    wordSets[rank] = keeperForCurrentWordSet
    // Move the rest into the next WORDSET (which we will loop into... NOW!)
    wordSets[rank + 1] = nextWordSet
  }

  const jsonData = JSON.stringify(fuck, null, 2)
  fs.writeFileSync("fuck.json", jsonData)

  return wordSets
}

module.exports = coverWordSets
