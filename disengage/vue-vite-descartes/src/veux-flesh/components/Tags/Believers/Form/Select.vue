<template>
  <pre v-if="bugs">
/**fieldName*/ = {{ fieldName }}
/**fieldValue*/ = {{ fieldValue }}
/**fieldBeliever*/ = {{ fieldBeliever }}
/**fieldTag*/ = {{ fieldTag }}
/**fieldProps*/ = {{ fieldProps }}
  </pre>
  <component v-bind:itemprop="fieldName" :is="fieldProps.wrapField">
    <label v-if="fieldName">
      {{ fieldName }}
    </label>
    <button
      type="button"
      v-for="enumeree of fieldProps.fieldEnums"
      v-on:click="fieldValue = enumeree"
      :class="{ selected: enumeree === fieldValue }"
    >
      {{ enumeree }}
    </button>
  </component>
</template>

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
