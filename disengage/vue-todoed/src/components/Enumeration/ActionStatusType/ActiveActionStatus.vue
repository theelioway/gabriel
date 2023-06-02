<template>
  <pre v-if="bugs">
id={{ id }}
  </pre>
  <button @click="$emit('clickActionStatusType', id, 'ActiveActionStatus')">
    Complete
  </button>
  <strong><slot></slot></strong>
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
