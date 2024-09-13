<script setup>
import { ref } from "vue"

const searchQuery = ref("");
const emitSearch = defineEmits(['search']);

const searchCharacter = () => {
  console.log("funciona boton")
  if (searchQuery.value) {
    emitSearch('search', searchQuery.value);
  }
}
</script>

<template>
  <div>
    <input type="text" placeholder="Busca con el nombre del personaje" v-model="searchQuery"
      @keyup.enter="searchCharacter" class="search-input" />
    <button @click="searchCharacter" class="btn-pagination">Buscar</button>
  </div>
</template>
