<script setup>
import { useGetData } from '@/composables/getData';
import SearchInput from "../components/SearchInput.vue"
import { ref, computed } from 'vue';
import { useGetAllCharacters } from '@/composables/getAllCharactes';

const currentPage = ref(1);
const searchTerm = ref('');

const { getData, data, loading, errorData } = useGetData();
const { getAllCharactersData, characters } = useGetAllCharacters();

const loadPage = (page) => {
  getData(`https://dragonball-api.com/api/characters?page=${page}`);
  currentPage.value = page;
}

loadPage(currentPage.value);

getAllCharactersData();

const filteredCharacters = computed(() => {
  if (!searchTerm.value) {
    return characters.value?.items || [];
  }
  return characters.value?.filter(character => character.name.toLowerCase().includes(searchTerm.value.toLowerCase()))
})
</script>

<template>
  <section class="characters">
    <h1 class="title">Personajes</h1>
    <p v-if="loading">Cargando...</p>
    <p v-if="errorData">{{ errorData }}</p>

    <SearchInput v-model="searchTerm" />

    <div v-if="data">

      <!-- Muestra por personaje -->
      <div v-if="filteredCharacters.length > 0">
        <ul class="characters__container">
          <li v-for="(character) in filteredCharacters" :key="character.id" class="li__characters">
            <router-link :to="`/characters/${character.id}`" class="character__link">
              {{ character.name }}
              <img :src="character.image" :alt="character.name" width="auto" height="200">
            </router-link>
          </li>
        </ul>
      </div>

      <!-- Muestra todos los personajes -->
      <ul v-if="data.items" class="characters__container">
        <li v-for="(character) in data.items" :key="character.id" class="li__characters">
          <router-link :to="`/characters/${character.id}`" class="character__link">
            {{ character.name }}
            <img :src="character.image" :alt="character.name" width="auto" height="200">
          </router-link>
        </li>
      </ul>

      <div v-if="data.items" class="btn__container">
        <button :disabled="!data.links.previous" @click="loadPage(currentPage - 1)" class="btn-pagination">
          Anterior
        </button>

        <button v-for="page in data.meta.totalPages" :key="page" :class="{ active: currentPage === page }"
          @click="loadPage(page)" class="numbers-pagination">
          {{ page }}
        </button>

        <button :disabled="!data.links.next" @click="loadPage(currentPage + 1)" class="btn-pagination">
          Siguiente
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 5px;
}

.title {
  margin: 10px;
  font-size: 34px;
}

.characters__container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 50px 0px;
}

.li__characters {
  border: 2px solid var(--color-border);
  box-shadow: 2px 2px 5px 0px var(--color-border);
  border-radius: 8px;
  display: flex;
  justify-content: center;
  margin: 10px;
  font-size: 24px;
  width: 300px;
  height: auto;
  min-height: 100px;
}

.character__link {
  display: flex;
  padding: 10px 2px;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: transparent;
  }
}

.btn__container {
  display: flex;
  justify-content: center;
  margin: 10px 5px;
}

.btn-pagination {
  border: 1px solid var(--color-background-btn);
  color: var(--color-background-btn);
  border-radius: 10px;
  padding: 10px;
  font-size: 18px;
  width: 120px;
  margin: 5px 10px;
  cursor: pointer;
  background-color: transparent;

  &:hover {
    color: var(--color-background-btn-hover);
    border: 1px solid var(--color-background-btn-hover);
  }
}

.numbers-pagination {
  background-color: transparent;
  border: none;
  color: var(--color-background-btn);
  font-size: 18px;
  padding: 0px 20px;
  cursor: pointer;

  &:hover {
    color: var(--color-background-btn-hover);
  }
}

.numbers-pagination.active {
  color: var(--color-border-hover);

  &:hover {
    color: var(--color-border-hover);
  }
}

.btn-pagination:disabled {
  background-color: var(--color-border);
  border: 1px solid var(--color-border);
  color: var(--color-border-hover);

  &:hover {
    border: 1px solid var(--color-border);
    color: var(--color-border-hover);
  }
}
</style>
