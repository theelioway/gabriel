import { createStore } from "vuex"

import getters from "@/store/getters"
import mutations from "@/store/mutations"

import emptyThing from "@/store/emptyThing"
import bareBones from "@/store/bareBones"
import someFlesh from "@/store/someFlesh"

export default createStore({
  state() {
    return {
      bone: bareBones,
      flesh: someFlesh,
      thing: emptyThing,
      recycle: [],
    }
  },
  mutations: mutations,
  getters: getters,
})
