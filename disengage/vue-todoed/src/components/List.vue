<template>
  <form @submit.prevent="addThing">
    <input type="text" placeholder="Add a new thing" v-model="name" />
  </form>
  <ItemList />
</template>

<script>
import { MUTATIONS } from "@/store/mutations"
import ItemList from "@/components/Things/ItemList.vue"

export default {
  components: { ItemList },
  data() {
    return {
      id: Date.now(),
      name: "",
    }
  },
  methods: {
    addThing: function () {
      const { id, name, potentialAction } = this
      this.$store.commit(MUTATIONS.ENLIST, { id, name })
      this.id = Date.now()
      this.name = ""
    },
  },
}
</script>
