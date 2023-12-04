import wordDb from "./english.js"
let lenOf = Number(process.argv[2])
console.log(
  wordDb
    .filter((word) => word.length === lenOf)
    .filter((word) => {
      return word
        .split("")
        .every((c) =>
          ["a", "s", "d", "f", "g", "h", "j", "k", "l", ";"].includes(c),
        )
    }),
)
