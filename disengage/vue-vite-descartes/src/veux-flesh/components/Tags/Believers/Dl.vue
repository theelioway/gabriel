<template>
  <pre v-if="bugs">
/**fieldName*/ = {{ fieldName }}
/**fieldValue*/ = {{ fieldValue }}
/**fieldBeliever*/ = {{ fieldBeliever }}
/**fieldTag*/ = {{ fieldTag }}
/**fieldProps*/ = {{ fieldProps }}
  </pre>
  <dd>{{ fieldName }}</dd>
  <dt v-bind:itemprop="fieldName">{{ fieldValue }}</dt>
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
