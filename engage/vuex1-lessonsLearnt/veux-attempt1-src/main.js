import { createApp } from "vue"
// import Vue3Sanitize from "vue-3-sanitize";
import store from "./store"
import Life from "./components/Life.vue"
import "./innocent.min.css"
import "./envy.css"

const app = createApp(Life)
app.use(store)

// const overridenSanitizeOptions = {
//     allowedTags: ['p']
// };
// app.use(Vue3Sanitize)
app.mount("#app")
