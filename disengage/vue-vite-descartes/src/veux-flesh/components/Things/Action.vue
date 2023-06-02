<template>
  <aside><h2>Action</h2></aside>
  <Thing :bones="bones" :flesh="flesh" :thing="thing" />
</template>

<script>
import Thing from "./Thing.vue"

export default {
  props: { bones: Object, flesh: Object, thing: Object },
  components: { Thing },
}
</script>
