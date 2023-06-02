import { createLogger } from "vuex"
import { STORAGE_KEY } from "./mutations"

const localStoragePlugin = (store) => {
  store.subscribe((mutation, { thing }) => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(thing))
  })
}

export default process.env.NODE_ENV !== "production"
  ? [createLogger(), localStoragePlugin]
  : [localStoragePlugin]
