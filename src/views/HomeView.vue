<script setup>
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>

<style scoped>
main {
  /* border: 1px solid yellow; */
  max-height: 100vh;
  height: calc(100vh - 100px);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
