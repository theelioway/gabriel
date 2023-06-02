<template>
  <main v-for="thing in itemListElement" :key="thing.id">
    <ActionStatusType :thing="thing" :field="potentialAction">
      {{ thing.name }}
    </ActionStatusType>
  </main>
</template>

<script>
import { GETTERS } from "@/store/getters"
import { MUTATIONS } from "@/store/mutations"
import ActionStatusType from "@/components/Enumeration/ActionStatusType.vue"

export default {
  components: { ActionStatusType },
  computed: {
    itemListElement() {
      return this.$store.getters[GETTERS.LIST]
    },
  },
  methods: {
    unlistThing: function (id) {
      console.log(id)
      this.$store.commit(MUTATIONS.UNLIST, id)
    },
  },
}
</script>
