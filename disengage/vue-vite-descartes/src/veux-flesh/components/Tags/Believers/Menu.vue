<template>
  <pre v-if="bugs">
/**fieldName*/ = {{ fieldName }}
/**fieldValue*/ = {{ fieldValue }}
/**fieldBeliever*/ = {{ fieldBeliever }}
/**fieldTag*/ = {{ fieldTag }}
/**fieldProps*/ = {{ fieldProps }}
  </pre>
  <menu v-bind:itemprop="field[0]">{{ field[1] }}</menu>
</template>

<script>
import { get } from "lodash"
export default { props: { field: Object } }
</script>
