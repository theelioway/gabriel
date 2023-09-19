import { createStore } from "vuex"
import { mutations, STORAGE_KEY } from "./mutations"
import actions from "./actions"
import plugins from "./plugins"
import getters from "./getters"
import DB from "./db"
import APP from "./app"

export default createStore({
  state: {
    thing: DB,
    APP: APP,
  },
  actions,
  getters,
  mutations,
  plugins,
})
