<template>
  <aside>{{ emptyMessage }}</aside>
</template>

<script>
export default {
  name: "Empty",
  props: { "emptyMessage": String },
}
</script>
