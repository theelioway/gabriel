import { createLogger } from "vuex"

const localStoragePlugin = store => {
  store.subscribe((mutation, { thing }) => {
    window.localStorage.setItem("STORAGE_KEY", JSON.stringify(thing))
  })
}

export default process.env.NODE_ENV !== "production"
  ? [createLogger(), localStoragePlugin]
  : [localStoragePlugin]
