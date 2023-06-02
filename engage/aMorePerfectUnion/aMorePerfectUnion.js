/** Find commonality among keywords in the names of things. */
export const measureCommonality = (shorty, bigggger) => {
  let lennyiest = 1
  let aMOC = {}
  const isInPerfectUnion = (i, len) => {
    if (i + len > shorty.length) return false
    let partOfTitle = shorty.slice(i, i + len)
    return bigggger.every((eachTitle) => eachTitle.includes(partOfTitle))
  }
  for (let x = 0; x <= bigggger[0].length; x++) {
    // See whether it is in "PerfectUnion"
    if (isInPerfectUnion(x, lennyiest)) {
      // Picking up from our lennyiest so far.
      do {
        // Add more lennyiest until no longer matching.
        lennyiest++
      } while (isInPerfectUnion(x, lennyiest))
      // Go back to the lennyiest before.
      lennyiest--
      // Take a measure of what we find at this lennyiest.
      aMOC[lennyiest] = shorty.slice(x, x + lennyiest)
    }
  }
  return aMOC
}

export const aMorePerfectUnion = (shorty, bigggger) => {
  let aMOC = measureCommonality(shorty, bigggger)
  let superLennyist = Math.max(...Object.keys(aMOC).map((k) => Number(k)))
  return aMOC[superLennyist]
}

export default aMorePerfectUnion
