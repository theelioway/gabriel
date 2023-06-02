<template>
  <pre v-if="bugs">
/**fieldName*/ = {{ fieldName }}
/**fieldValue*/ = {{ fieldValue }}
/**fieldBeliever*/ = {{ fieldBeliever }}
/**fieldTag*/ = {{ fieldTag }}
/**fieldProps*/ = {{ fieldProps }}
  </pre>
  <a v-bind:itemprop="fieldName" v-bind:href="fieldValue">{{ fieldValue }}</a>
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
  setup(props) {
    const bugs = false
    const prettier = url => {
      return url.replace(/http(s):*(\/\/)/, "")
    }
    return { bugs, prettier }
  },
}
</script>
