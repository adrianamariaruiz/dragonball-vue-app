<script setup>
</script>

<template>
  <section>
    <img src="https://dragonball-api.com/characters/goku_normal.webp" alt="Dragonball image" width="auto" height="300">
    <h1>Bienvenido a la página de Dragonball</h1>
    <RouterLink to="/characters" class="linkToView">
      Continuar!
    </RouterLink>
  </section>
</template>

<style scoped>
section {
  display: flex;
  flex-direction: column;
  place-items: center;
  gap: 50px;
}

h1 {
  font-size: 45px;
}

.linkToView {
  border: 1px solid var(--color-background-btn);
  color: var(--color-background-btn);
  border-radius: 10px;
  padding: 10px;
  font-size: 18px;
  width: 120px;
  text-align: center;
  cursor: pointer;
  background-color: transparent;

  &:hover {
    color: var(--color-background-btn-hover);
    border: 1px solid var(--color-background-btn-hover);
  }
}
</style>
