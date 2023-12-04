import { get, cloneDeep } from "lodash"
import thingIntoFlesh from "../utils/thingIntoFlesh"
import { cloneDeepBreaking, rePurpose, reRaw } from "./platter"

export const gettersThing = {
  weAreTheBelievers: (state, getters) => (thingFromBone) => {
    let valuesBucket = (thing) => {
      return Object.fromEntries(
        Object.entries(thing).flatMap(([k, v]) => Object.entries(v)),
      )
    }
    /** flatMap all the fields into one 'bucket'" */
    let valuesBucketFromBone = valuesBucket(thingFromBone)
    /** Tells us which tags to use (as believers) for any field. Data is
     * straight from the `flesh` prop in the store's `state`. */
    let fleshFromBone = state.flesh[getters.engagedBone]
    /** Combine the values from the data record with the corresponding `flesh`
     * properties (from App config) into a list of objects; conveniently
     * grouping them up into a parentTag/childTags relationship */
    let thingsMadeFlesh = thingIntoFlesh(fleshFromBone, valuesBucketFromBone)
    return thingsMadeFlesh
  },
  mainMenuFromBonesList: (state) => Object.keys(state.flesh),
  engagedBone: (state) => get(state, "thing.engaged"),
  engagedList: (state) => get(state, "thing.ItemList.engaged"),
  listBoneEngagedX: (state) => (x) => {
    console.log("listBoneEngagedX", x)
    return get(state, "thing.ItemList.engaged")
  },
}
