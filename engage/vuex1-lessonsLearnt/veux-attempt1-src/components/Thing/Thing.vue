<template>
  <h1>
    <img src="../../assets/apple-touch-icon.png" style="max-width: 50px" />
    {{ capitalize(thing.name) }}
  </h1>
  <div v-html="thing.description" />
</template>

<script>
export default {
  name: "Thing",
  props: {"thing": Object},
  components: {},
  setup(props) {
    const capitalize = s => s.charAt(0).toUpperCase() + s.slice(1)
    return { capitalize }
  },
  computed: {
    FilteredBy() {
      return this.$store.state.Api.list.filtered
    },
    Filters() {
      return this.$store.getters
    },
    List() {
      return this.Filters[this.FilteredBy]
    },
    Optimize() {
      return this.$store.state.Api.engage.optimize
    },
  },
}
</script>
