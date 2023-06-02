# Cheat vuex

## .vue Files

`Thing` is the highest level component.

```
<template>
  <h1>{{ capitalize(thing.name) }}</h1>
</template>

<script>
export default {
  name: "Thing",
  props: {"thing": Object},
  components: {},  // import sub components, like forms, etc
  setup(props) {
    const capitalize = s => s.charAt(0).toUpperCase() + s.slice(1)
    return { capitalize }
  },
  computed: {
    FilteredBy() {
      // `store.state.Thing` is the data.
      return this.$store.state.Thing.list.filtered
    },
    Filters() {
      // `store.actions|getters|mutations|plugins` is the "store" Api. TODO: rename concept "store"?
      return this.$store.getters
    },
    List() {
      // Another computed `this.FilteredBy`
      return this.Filters[this.FilteredBy]
    },
    Optimize() {
      // `store.state.Api` is the app definition: it tells you what filters to use,
      // or what the field types are,
      // or which fields should be rendered in lists, etc.
      return this.$store.state.Api.engage.optimize
    },
  },
}
</script>
```

`Frankenstein` is the App. This simple one gets a thing from the state. More complex Apps might load and unload apps; handle creating new ones, etc.

```
// `./components/Frankenstein.vue`
<template>
  <Thing :thing="engagedThing" />
</template>

<script>
import Thing from './components/Thing.vue'

export default {
  components: {
    Thing
  },
  computed: {
    // as property getter
    engagedThing: {
      get () {
        return this.$store.state.thing
      },
    },
    // as function
    engagedThing() {
      return this.$store.state.thing
    },
  }
}
</script>
```

## import .vue Files

```
// `./main.js`
import { createApp } from "vue"
import store from "./store"
import Frankenstein from "./components/Frankenstein.vue"
import "./envy.css"

const app = createApp(Frankenstein)
app.use(store)
app.mount("#app")
```
