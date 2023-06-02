<template>
  <pre v-if="bugs">/**weAreTheBelievers*/ = {{ weAreTheBelievers }}</pre>
  <!-- Option 1: You could not write the outside one. -->
  <component
    v-for="(fieldBeliever, believerIndex) in weAreTheBelievers"
    :is="fieldBeliever.fieldBeliever"
  >
    <Believer
      v-for="(fieldTag, tagIndex) in fieldBeliever.believers"
      :fieldName="fieldTag.fieldName"
      :fieldValue="fieldTag.fieldValue"
      :fieldBeliever="fieldTag.fieldBeliever"
      :fieldTag="fieldTag.fieldTag"
      :fieldPath="fieldTag.fieldPath"
      :fieldProps="fieldTag"
    />
  </component>
</template>

<script>
import { last } from "lodash"
import { mapActions, mapGetters, mapState } from "vuex"
import Believer from "../Tags/Believer.vue"

export default {
  props: { bones: Object, flesh: Object, thing: Object },
  components: { Believer }, //  A,Input,Believer
  setup(props) {
    const bugs = true
    return { bugs }
  },
  computed: {
    ...mapGetters(["engagedBone", "mainMenuFromBonesList"]),
    weAreTheBelievers() {
      return this.$store.getters.weAreTheBelievers(this.thing)
    },
  },
}
</script>
