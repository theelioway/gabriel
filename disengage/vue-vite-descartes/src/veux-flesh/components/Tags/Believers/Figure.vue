<template>
  <pre v-if="bugs">
/**fieldName*/ = {{ fieldName }}
/**fieldValue*/ = {{ fieldValue }}
/**fieldBeliever*/ = {{ fieldBeliever }}
/**fieldTag*/ = {{ fieldTag }}
/**fieldProps*/ = {{ fieldProps }}
  </pre>
  <figure>
    <img v-bind:itemprop="fieldName" v-bind:src="fieldValue" />
    <label v-if="label === 'bottom'">{{ fieldValue }}</label>
  </figure>
</template>

<script>
import { get } from "lodash"
export default {
  props: {
    fieldName: String,
    fieldBeliever: String,
    fieldTag: String,
    fieldProps: Object,
  },
}
</script>
