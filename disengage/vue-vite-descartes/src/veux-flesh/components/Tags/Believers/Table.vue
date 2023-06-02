<template>
  <pre v-if="bugs">
/**fieldName*/ = {{ fieldName }}
/**fieldValue*/ = {{ fieldValue }}
/**fieldBeliever*/ = {{ fieldBeliever }}
/**fieldTag*/ = {{ fieldTag }}
/**fieldProps*/ = {{ fieldProps }}
  </pre>
  <table v-bind:itemprop="field[0]">
    {{
      field[1]
    }}
  </table>
</template>

<script>
import { get } from "lodash"
export default { props: { field: Object } }
</script>
