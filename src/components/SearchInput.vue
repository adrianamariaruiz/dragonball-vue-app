<script setup>
import { ref, watch } from "vue"

const searchQuery = ref("");
const emitSearch = defineEmits(['update:modelValue']);

watch(searchQuery, (newValue) => {
  emitSearch('update:modelValue', newValue);
});
</script>

<template>
  <div>
    <input type="text" placeholder="Busca con el nombre del personaje" v-model="searchQuery" class="search-input" />
  </div>
</template>

<style scoped>
input {
  border-radius: 8px;
  margin-top: 20px;
  padding: 10px 5px;
  min-width: 350px;
  border: 2px solid var(--background-btn);
  background-color: transparent;
  color: var(--color-text);
  font-size: 16px;

  &:focus {
    outline: 2px solid var(--background-btn-hover);
  }
}
</style>
