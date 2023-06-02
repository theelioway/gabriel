<template>
  <pre v-if="bugs">
/**fieldName*/ = {{ fieldName }}
/**fieldBeliever*/ = {{ fieldBeliever }}
/**fieldTag*/ = {{ fieldTag }}
/**fieldPath*/ = {{ fieldPath }}
/**fieldProps*/ = {{ fieldProps }}
  </pre>
  <component :is="fieldProps.wrap || 'fieldset'">
    <label>{{ fieldName }}</label>
    <input :type="fieldProps.fieldType" v-model="fieldValue" />
  </component>
</template>
<!-- @input="updateMessage" -->
<script>
import { get } from "lodash"
import { mapActions, mapGetters, mapState } from "vuex"

export default {
  props: {
    fieldName: String,
    fieldBeliever: String,
    fieldTag: String,
    fieldPath: String,
    fieldProps: Object,
  },
  setup(props) {
    const bugs = false
    return { bugs }
  },
  methods: {
    ...mapActions([   'OPTIMIZE',  ]),
  },
  computed: {
    fieldValue: {
      get() {
        return get(this.$store.state, this.$props.fieldPath)
      },
      set(value) {
        this.$store.commit("mut", { path: this.$props.fieldPath, val: value })
      },
    },
  },
}
</script>
