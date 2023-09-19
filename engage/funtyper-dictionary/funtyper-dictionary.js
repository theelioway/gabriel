const fs = require("fs")
const coverWordSets = require("./src/index.js")

function fixWordSets() {
  // Read LETTER_SETS from JSON file
  const letterSetsData = fs.readFileSync("LETTER_SETS.json")
  const LETTER_SETS = JSON.parse(letterSetsData)

  // Read WORD_SETS from JSON file
  const wordSetsData = fs.readFileSync("WORD_SETS.json")
  const WORD_SETS = JSON.parse(wordSetsData)

  console.log("LETTER_SETS:", LETTER_SETS.length)
  console.log("WORD_SETS:", WORD_SETS.length)
  
  let result = coverWordSets(LETTER_SETS, WORD_SETS)

  // Write updatedWordSets to JSON file
  const jsonData = JSON.stringify(result, null, 2)
  fs.writeFileSync("WORD_SETS_FIXED.json", jsonData)
}

fixWordSets()
