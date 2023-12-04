import { set } from "lodash"

if (navigator.webdriver) {
  window.localStorage.clear()
}

export const MUTATIONS = {
  ENLIST: "ENLIST",
  UNLIST: "UNLIST",
  OPTIMIZE: "OPTIMIZE",
  EDIT: "EDIT",
}

export default {
  [MUTATIONS.OPTIMIZE](state, { path, val }) {
    set(state, path, val)
  },
  [MUTATIONS.ENLIST](state, thing) {
    thing.potentialAction = "PotentialActionStatus"
    // console.log({ thing })
    state.thing.List.itemListElement.unshift(thing)
  },
  [MUTATIONS.UNLIST](state, thingId) {
    let thing = state.thing.List.itemListElement.find(
      (thing) => thing.id === thingId,
    )
    state.recycle.push(thing)
    let thingIndex = state.thing.List.itemListElement.indexOf(thing)
    state.thing.List.itemListElement.splice(thingIndex, 1)
  },
  [MUTATIONS.EDIT](state, { thingId, field, val }) {
    console.log({ thingId, field, val })
    let thing = state.thing.List.itemListElement.find(
      (thing) => thing.id === thingId,
    )
    thing[field] = val
    console.log(thing[field])
  },
}
