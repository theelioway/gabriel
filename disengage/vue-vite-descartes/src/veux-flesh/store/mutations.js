import { set } from "lodash"

if (navigator.webdriver) {
  window.localStorage.clear()
}

export const enum MUTATIONS {
  ENLIST =  'ENLIST',
  UNLIST =  'UNLIST',
  OPTIMIZE =  'OPTIMIZE'
};

export const mutationsThing = {
  [MUTATIONS.OPTIMIZE](state, { path, val }) {
    set(state, path, val)
  },
  [MUTATIONS.ENLIST](state, thing) {
    state.things.push(thing);
  },
  [MUTATIONS.UNLIST](state, thing) {
    let thingIndex = state.thing.List.itemListElement.indexOf(thing)
    state.thing.List.itemListElement.splice(thingIndex, 1);
  },
  // [MUTATIONS.OPTIMIZE](state, thing){
  //   let thingIndex = state.thing.List.itemListElement.indexOf(thing)
  //   set(state, `List.itemListElement[${thingIndex}]`, thing)
  // }
}
