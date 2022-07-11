<template>
  <p>
    {{ message }}
  </p>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'Carousel',
  setup() {
      const message = ref('Hello Gamers ! Ready to learn how to play ?')

      return {
        message
      }
  }
}
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
