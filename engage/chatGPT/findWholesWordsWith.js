const fs = require("fs")
const path = require("path")

function searchPatternInFile(filePath, pattern, wordSet) {
  const data = fs.readFileSync(filePath, "utf8")
  const words = data.split(/\W+/)

  words.forEach((word) => {
    if (word.includes(pattern)) {
      wordSet.add(word)
    }
  })
}

function traverseDirectory(directoryPath, pattern, wordSet) {
  const files = fs.readdirSync(directoryPath)

  files.forEach((file) => {
    const filePath = path.join(directoryPath, file)
    const stats = fs.statSync(filePath)

    if (stats.isFile() && file.endsWith(".js")) {
      searchPatternInFile(filePath, pattern, wordSet)
    } else if (stats.isDirectory()) {
      traverseDirectory(filePath, pattern, wordSet)
    }
  })
}

function findPatternWords(rootDirectory, pattern) {
  const wordSet = new Set()
  traverseDirectory(rootDirectory, pattern, wordSet)
  return wordSet
}

// Example usage:
const rootDirectory = "/home/tim/Dev/FunTyper/"
const patterns = [
  "grank",
  "glosition",
  "glave",
  "Grank",
  "Glosition",
  "Glave",
  "GRANK",
  "GLOSITION",
  "GLAVE",
]

patterns.forEach((pattern) => {
  const result = findPatternWords(rootDirectory, pattern)
  console.log("Words containing the pattern:", result)
})
