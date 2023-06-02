<template>
  <pre v-if="bugs">/**thing*/ = {{ thing }}</pre>
  <Select
    fieldName="Engaged"
    fieldBeliever="form"
    fieldTag="Select"
    fieldPath="thing.engaged"
    :fieldProps="menuTag"
  />
  <main>
    <component :bones="bones" :flesh="flesh" :thing="thing" :is="engagedBone" />
  </main>
</template>

<script>
/* TODO: Can we construct Things and Tags template programmatically?! Or import at least! */
import { get, last } from "lodash"
import { mapActions, mapGetters, mapState } from "vuex"
import List from "./List.vue"
import Select from "./Tags/Believers/Form/Select.vue"
import Thing from "./Things/Thing.vue"
import Action from "./Things/Action.vue"

export default {
  name: "Engage", //<-- LearningMoment. Make sure these are all unique. Copy paste gotcha! This names clash! Don't use?
  props: {},
  components: { List, Select, Thing, Action },
  setup(props) {
    const capitalize = s => s.charAt(0).toUpperCase() + s.slice(1)
    const defaultComponent = "Thing"
    // keep bugs local.. components must turn their own debugging on and off.
    const bugs = false
    return { bugs, defaultComponent, capitalize }
  },
  computed: {
    ...mapState(["bones", "flesh", "thing"]),
    ...mapGetters(["engagedBone", "mainMenuFromBonesList"]),
    menuTag() {
      return {
        fieldEnums: Object.keys(this.bones),
        wrapField: "nav",
      }
    },
  },
  /* methods: {
  // ...mapActions(['getAllProblems']),
  }  */
}
</script>
