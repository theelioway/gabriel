<template>
  <pre v-if="bugs">
/**fieldName*/ = {{ fieldName }}
/**fieldValue*/ = {{ fieldValue }}
/**fieldBeliever*/ = {{ fieldBeliever }}
/**fieldTag*/ = {{ fieldTag }}
/**fieldProps*/ = {{ fieldProps }}
  </pre>
  <img v-bind:itemprop="fieldName" v-bind:src="fieldValue" />
</template>

<script>
import { get } from "lodash"
export default {
  props: {
    fieldName: String,
    fieldValue: String,
    fieldBeliever: String,
    fieldTag: String,
    fieldProps: Object,
  },
}
</script>
