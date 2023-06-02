<template>
  <Thing :thing="engaged" />
  <List :thing="engaged" />
</template>

<script>
import { computed } from "vue"
import { useStore } from "vuex"
import Thing from "./Thing/Thing.vue"
import List from "./Thing/List.vue"

export default {
  components: {
    Thing,
    List,
  },
  setup() {
    const store = useStore()
    const engaged = computed(() => store.state.Thing)
    return { engaged }
  },
}
</script>
