<template>
  <ListFilter
    :filters="Filters"
    :filteredBy="FilteredBy"
    @changeFilter="onFiltered"
  ></ListFilter>
  <Engage
    v-for="(listedThing, index) in List"
    :key="index"
    :thing="listedThing"
  ></Engage>
  <ListEmpty
    v-for="(val, key) in empties"
    v-show="!List.length && FilteredBy.value === key"
    :emptyMessage="val"
  ></ListEmpty>
  <ListFooter
    :allCount="Filters.All.length"
    :resultCount="List.length"
  ></ListFooter>
</template>

<script>
import { mapGetters } from 'vuex'
import { ref, computed } from "vue"
import { useStore } from "vuex"
import Engage from "./Engage.vue"
import ListFilter from "./List/Filter.vue"
import ListFooter from "./List/Footer.vue"
import ListEmpty from "./List/Empty.vue"

export default {
  name: "List",
  components: { Engage, ListFilter, ListFooter, ListEmpty },
  props: {"thing": Object },
  setup(props) {
    const store = useStore()
    const { empties } = store.state.Api.list
    const thing = computed(() => props.thing)
    return { thing, empties }
  },
  computed: {
    FilteredBy() {
      return this.$store.state.Api.list.filtered
    },
    Filters() {
      return this.$store.getters
    },
    List() {
      console.log(this.FilteredBy)
      return this.Filters[this.FilteredBy.value]
    }
  },
  methods: {
    onFiltered(val, key) {
      console.log("onFiltered", filtered, val)
      this.$store.commit('filteredBy', { field: val, value: filtered})
    }
  }
}
</script>
