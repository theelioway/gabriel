<template>
  <pre v-if="bugs">
id={{ id }}
  </pre>
  <aside>Failed</aside>
  <mark><slot></slot></mark>
</template>

<script>
export default {
  props: { id: Date },
  setup(props) {
    const bugs = !true
    return { bugs }
  },
}
</script>
