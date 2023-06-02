<template>
  <pre v-if="bugs">
/**fieldName*/ = {{ fieldName }}
/**fieldValue*/ = {{ fieldValue }}
/**fieldBeliever*/ = {{ fieldBeliever }}
/**fieldPath*/ = {{ fieldPath }}
/**fieldTag*/ = {{ fieldTag }}
/**fieldProps*/ = {{ fieldProps }}
  </pre>
  <component
    :is="fieldTag === fieldBeliever ? 'span' : fieldTag"
    :fieldName="fieldName"
    :fieldValue="fieldValue"
    :fieldBeliever="fieldBeliever"
    :fieldTag="fieldTag"
    :fieldPath="fieldPath"
    :fieldProps="fieldProps"
    >{{ fieldValue }}</component
  >
</template>

<script>
import A from "./Believers/A.vue"
import Img from "./Believers/Img.vue"
import Input from "./Believers/Form/Input.vue"
import Select from "./Believers/Form/Select.vue"
import TextArea from "./Believers/Form/TextArea.vue"
export default {
  props: {
    fieldName: String,
    fieldValue: String,
    fieldBeliever: String,
    fieldTag: String,
    fieldPath: String,
    fieldProps: Object,
  },
  components: { A, Img, Input, Select, TextArea },
  setup(props) {
    const bugs = false
    return { bugs }
  },
}
</script>
