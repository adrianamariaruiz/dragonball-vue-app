<script setup>
</script>

<template>
  <section>
    <h1>Bienvenido a la página de Dragonball</h1>
    <button>
      Continuar!
    </button>
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

button {
  background-color: transparent;
  color: var(--color-background-btn);
  font-size: 20px;
  padding: 10px 20px;
  max-width: 140px;
  border-radius: 10px;
  box-shadow: inset;
  cursor: pointer;

  &:hover {
    color: var(--color-background-btn-hover);
  }
}
</style>
