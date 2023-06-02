<template>
  <pre style="overflow: hidden; padding: 3px">
 {{ resultCount }} of {{ allCount }} </pre
  >
</template>

<script>
export default {
  name: "Footer",
  props: { resultCount: Number, allCount: Number },
}
</script>
