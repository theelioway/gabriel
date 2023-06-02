// The weight goal.
const GOAL = 50.0
// How much PRECISION to seek... smaller takes longer.
const PRECISION = 0.1
// The weights of everyday things which can be
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
let ITEMS_IN_YOUR_POSSESSION = [
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
  "EUR50",
  "EUR200",
].map((w) => KNOWN_WEIGHTS_OF_THINGS[w])

/** DO NOT edit the rest unless you can do better than me! */
let OUT = new Map()
// A function to keep looking for the perfect weight combinations.
function findCombinationToGoal(goal, numbers, partial) {
  let n = 0
  partial = partial || []
  let projection = partial.reduce((a, b) => a + b, 0)
  // check if the partial sum equals goal
  if (PRECISION > Math.abs(goal - projection)) {
    let HIT = partial.sort().join("/")
    OUT.set(HIT, { projection })
  }
  // Recursively call this function combining different items
  // until you get the a list of perfect combos.
  for (var i = 0; i < numbers.length; i++) {
    n = numbers[i]
    remainingNumbers = numbers.slice(i + 1)
    findCombinationToGoal(goal, remainingNumbers, partial.concat([n]))
  }
}

findCombinationToGoal(GOAL, ITEMS_IN_YOUR_POSSESSION, [])

console.table(OUT.entries())
