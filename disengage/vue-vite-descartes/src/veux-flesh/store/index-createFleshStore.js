import { createStore } from "vuex"
import { actionsThing } from "./actions"
import { gettersThing } from "./getters"
import { mutationsThing } from "./mutations"
import pluginsThing from "./plugins"

import { merge } from "lodash"

export function createFleshStore({
  flesh,
  bones,
  thing,
  actions,
  getters,
  mutations,
  plugins,
}) {
  actions = merge(actionsThing, actions)
  getters = merge(gettersThing, getters)
  mutations = merge(mutationsThing, mutations)
  plugins = merge(pluginsThing, plugins)
  console.log({
    Thing: "DEBUG_APPSTATE_WHEN_LOADED",
    ItemList: [
      flesh,
      bones,
      thing,
      // actions,
      // getters,
      // mutations,
      // plugins,
    ],
  })
  return createStore({
    state: { flesh: flesh, bones: bones, thing: thing },
    actions,
    getters,
    mutations,
    plugins,
  })
}
