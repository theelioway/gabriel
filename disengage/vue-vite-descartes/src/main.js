// TODO: Rename to Thing?
import "../css/descartes.css"
import { createApp } from "vue"
import Flesh from "./flesh.vue"
import { createFleshStore } from "./veux-flesh/store/index.js"
import { actions, getters, mutations, plugins } from "./store/index"
import bones from "./bones" // site structure / menu
import flesh from "./flesh" // page structure / template config
import thing from "./thing" // data

const fleshStore = createFleshStore({
  flesh,
  bones,
  thing, // optional: for new instances use `{}`
  actions, // merged into "./veux-flesh/store/actions.js"
  getters, // merged into "./veux-flesh/store/getters.js"
  mutations, // merged into "./veux-flesh/store/mutations.js"
  plugins, // merged into "./veux-flesh/store/plugins.js"
})

const app = createApp(Flesh)
// app.??
app.use(fleshStore)
// for (let tagName of [
// ]) {
//   app.component(tagName, import(`./veux-flesh/components/Things/Tags/${tagName}.vue`))
// }
app.mount("#app")
