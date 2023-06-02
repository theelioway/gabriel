<template>
  <pre><button v-for="(val, key) in filters"
        @click="$emit('changeFilter', val, key)"
        :href="'#/' + key"
        :class="{ selected: filteredBy.value === key }"
      >{{ key }}</button></pre>
</template>

<script>
export default {
  name: "Filter",
  props: { "filters": Object, "filteredBy": Object },
  emits: ['changeFilter'],
}
</script>
