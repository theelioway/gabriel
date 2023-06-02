<template>
  <pre v-if="bugs">/**itemListElements*/ = {{ itemListElements }}</pre>
  <!-- <Choice
    :filters="Filters"
    :filteredBy="FilteredBy"
    @changeFilter="onFiltered"
  ></Choice> -->
  <!-- <Select
    fieldName="Engaged"
    fieldBeliever="nav"
    fieldTag="Select"
    :fieldProps="FilterByType"
  /> -->
  {{ itemListElement }}
  <dl v-for="(thingListed, x) in itemListElements">
    <dt>
      <!-- <Select
        fieldName=""
        fieldBeliever="dt"
        fieldTag="Select"
        :fieldProps="menuTag(thingListed, x)"
      /> -->
    </dt>
    <dd>
      <component
        :bones="bones"
        :flesh="flesh"
        :thing="thingListed.ListItem.item"
        :is="Thing"
      />
      {{ thingListed.ListItem.item.Thing.name }}
    </dd>
  </dl>
  <!-- :is="Thing" -->
  <!-- <Engage
    :key="index"
    :thing="listedThing"
  ></Engage> -->
  <!-- <ListEmpty
    v-for="(val, key) in empties"
    v-show="!List.length && FilteredBy.value === key"
    :emptyMessage="val"
  ></ListEmpty> -->
  <!--  <ListFooter
    :allCount="Filters.All.length"
    :resultCount="List.length"
  ></ListFooter> -->
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex"
import Select from "../Tags/Believers/Form/Select.vue"
import Action from "./Action.vue"
import Thing from "./Thing.vue"

export default {
  components: { Select, Action, Thing },
  props: { bones: Object, flesh: Object, thing: Object },
  setup(props) {
    const bugs = false
    // const menuTag = (rowItem, x) => {
    //   return {
    //     fieldEnums: Object.keys(rowItem).filter(r => r !== "ItemList"),
    //     fieldPath: `thing.ItemList.itemListElements[${x + 1}].engaged`,
    //   }
    // }
    // const listBoneEngaged = (thingListed) => {
    //   console.log("listBoneEngaged", { thingListed })
    //   return "Thing" //this.thing.ItemList.itemListElement[x].engaged
    // }
    return { bugs } //, menuTag, listBoneEngaged }
  },
  computed: {
    ...mapGetters(["engagedBone", "engagedList", "mainMenuFromBonesList"]),
    // FilteredBy() {
    //   console.log("FilteredBy", this.$store.state.bones.list[this.$store.state.bones.list.engaged].filters)
    //   return this.$store.state.Api.list.filtered
    // },
    // Filters() {
    //   return this.$store.getters
    // },
    itemListElements() {
      return this.thing.ItemList.itemListElement
    },
    // listBoneEngaged(thingListed) {
    //   console.log("listBoneEngaged", { thingListed })
    //   return "Thing" //this.thing.ItemList.itemListElement[x].engaged
    // },
    // filterByType(){
    //   return {
    //     fieldEnums: this.mainMenuFromBonesList.filter(r => r!=="ItemList"),
    //     fieldPath: `thing.ItemList.engaged`
    //   }
    // }
  },
}
</script>
