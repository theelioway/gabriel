<template>
  <pre v-if="bugs">
id={{ id }}
  </pre>
  <button @click="$emit('clickActionStatusType', id, 'CompletedActionStatus')">
    Has Potential
  </button>
  <del><slot></slot></del>
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
