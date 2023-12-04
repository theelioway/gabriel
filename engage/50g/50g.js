// The weight goal.
const GOAL = 50.0

// How much PRECISION to seek... smaller takes longer.
const PRECISION = 0.01

// The weights of any everyday items you have which can be
// established without weighing them!
const KNOWN_WEIGHTS_ITEMS = {
  EUR1: 2.3,
  EUR2: 3.06,
  EUR5: 3.92,
  EUR10: 4.1,
  EUR20: 5.74,
  EUR50: 7.8,
  EUR100: 7.5,
  EUR200: 8.5,
  USD100: 8.1,
  CAD100: 6.27,
  AUS100: 9,
  AABattery: 23.16,
  AAABattery: 11.1,
  WeightTray: 5.62,
  EarPod: 5.4,
  SanDiskCruzerBlade: 3.33,
  SanDiskUltraFitUSB31: 1.3,
  CorsairFlashVoyager8: 18.76,
  CorsairFlashVoyager64: 15.28,
  MentosMint: 1.3,
}

// Don't make this too long!
let ITEMS_IN_MY_POSSESSION = [
  "SanDiskUltraFitUSB31",
  "SanDiskUltraFitUSB31",
  "SanDiskUltraFitUSB31",
  "SanDiskUltraFitUSB31",
  "SanDiskUltraFitUSB31",
  "SanDiskUltraFitUSB31",
  "SanDiskUltraFitUSB31",
  "SanDiskUltraFitUSB31",
  "SanDiskUltraFitUSB31",
  "SanDiskUltraFitUSB31",
  "EUR1",
  "EUR2",
  "EUR5",
  "EUR10",
  "EUR10",
  "EUR10",
  "EUR20",
  "EUR20",
  "EUR100",
  "EUR100",
  "EUR100",
  "EUR200",
  "EUR200",
  "EarPod",
  "EarPod",
].map((w) => KNOWN_WEIGHTS_ITEMS[w])

/** @TODONT edit the rest (unless you can do better than me) */

// Somewhere to hold our best combos.
let OUT = new Map()

// A function to keep looking for the perfect weight combos.
function findCombinationToGoal(goal, numbers, partial) {
  let n = 0
  // The list of combos being checked can not be undefined.
  partial = partial || []
  let projection = partial.reduce((a, b) => a + b, 0)
  // check if the partial sum equals goal
  if (PRECISION > Math.abs(goal - projection)) {
    let HIT = partial.sort().map((weight) => {
      return Object.keys(KNOWN_WEIGHTS_ITEMS).find(
        (key) => KNOWN_WEIGHTS_ITEMS[key] === weight,
      )
    })
    let lines = HIT.join(" / ")
    OUT.set(lines, projection)
  }
  // Recursively call this function combining different items
  // until you get the list of perfect combos.
  for (var i = 0; i < numbers.length; i++) {
    n = numbers[i]
    remainingNumbers = numbers.slice(i + 1)
    findCombinationToGoal(goal, remainingNumbers, partial.concat([n]))
  }
}

console.log("Please wait. This might take a few moments.")

// Call the function to find the combo!
findCombinationToGoal(GOAL, ITEMS_IN_MY_POSSESSION, [])

// Just show the top 3 results by fewest items meeting
// the precision required.
console.table(
  [...OUT.entries()]
    .sort((a, b) => a[0].split(" / ").length - b[0].split(" / ").length)
    .slice(0, 3),
)
