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
  "EUR50",
  "EUR200",
]

function findCombinationToGoal() {
  let result = null

  function recursiveSearch(currentCombination, remainingWeight) {
    if (remainingWeight <= 0) {
      result = currentCombination
      return
    }

    for (const item of ITEMS_IN_MY_POSSESSION) {
      const itemWeight = KNOWN_WEIGHTS_ITEMS[item]
      if (itemWeight <= remainingWeight) {
        recursiveSearch(
          [...currentCombination, item],
          remainingWeight - itemWeight,
        )

        if (result !== null) {
          return // Found a combination, stop searching
        }
      }
    }
  }

  recursiveSearch([], GOAL)

  return result
}

const result = findCombinationToGoal()
console.log(result)
