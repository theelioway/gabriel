<template>
  <Engage />
  <footer>
    <main>
      <img style="width: auto; height: 48px" src="/elio-descartes-logo.png" />
      <p>
        <a v-if="bugs" href="/index-theme.html"><button>Theme</button></a>
      </p>
    </main>
  </footer>
</template>

<script>
import Engage from "./veux-flesh/components/Engage.vue"

export default {
  name: "7 Stages of every Thing",
  components: { Engage },
  setup(props) {
    const bugs = true
    return { bugs }
  },
  computed: {},
}
</script>
