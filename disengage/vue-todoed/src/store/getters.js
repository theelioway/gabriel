export const GETTERS = {
  LIST: "LIST",
  LISTCOUNT: "LISTCOUNT",
}

export default {
  [GETTERS.LIST](state) {
    return state.thing.List.itemListElement
  },
  [GETTERS.LISTCOUNT](state) {
    return state.thing.List.itemListElement.length
  },
}
