<template>
  <pre v-if="bugs">
/**fieldName*/ = {{ fieldName }}
/**fieldValue*/ = {{ fieldValue }}
/**fieldBeliever*/ = {{ fieldBeliever }}
/**fieldPath*/ = {{ fieldPath }}
/**fieldTag*/ = {{ fieldTag }}
/**fieldProps*/ = {{ fieldProps }}
  </pre>
  <fieldset>
    <label>{{ fieldName }}</label>
    <textarea rows="10" v-model="fieldValue">{{ fieldValue }}</textarea>
  </fieldset>
</template>

<script>
import { get } from "lodash"
import { mapActions, mapGetters, mapState } from "vuex"

export default {
  props: {
    fieldName: String,
    // fieldValue: String,
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
        this.$store.dispatch("OPTIMIZE", { path: this.$props.fieldPath, val: value })
      },
    },
  },
}
</script>
