<template>
  <!-- <pre v-if="bugs">/**thing*/ = {{ thing }}</pre> -->
  <section v-for="(thingListed, x) in itemListElements">
    <main>
      <!-- <Select
        fieldName="Engaged"
        fieldBeliever="span"
        fieldTag="Select"
        fieldPath="thing.engaged"
        :fieldProps="menuTag"
      /> -->
      <component
        :bones="bones"
        :flesh="flesh"
        :thing="thingListed.ListItem.item"
        :is="Thing"
      />
      {{ thingListed.ListItem.item }}
    </main>
  </section>
</template>

<script>
/* TODO: Can we construct Things and Tags template programmatically?! Or import at least! */
import { get, last } from "lodash"
import { mapActions, mapGetters, mapState } from "vuex"
import Select from "./Tags/Believers/Form/Select.vue"
import Thing from "./Things/Thing.vue"
import ItemList from "./Things/ItemList.vue"
import Action from "./Things/Action.vue"

export default {
  name: "List",
  components: { Select, Thing, Action, ItemList },
  props: { bones: Object, flesh: Object, thing: Object },
  setup(props) {
    const bugs = false
    return { bugs }
  },
  computed: {
    ...mapGetters(["engagedBone", "engagedList", "mainMenuFromBonesList"]),
    itemListElements() {
      return this.thing.List.itemListElement
    },
  },
  /* methods: {
  // ...mapActions(['getAllProblems']),
  }  */
}
</script>
