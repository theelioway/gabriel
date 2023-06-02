<template>
  <pre v-if="bugs">
id={{ id }}
  </pre>
  <button @click="$emit('clickActionStatusType', id, 'PotentialActionStatus')">
    Activate
  </button>
  <ins><slot></slot></ins>
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
