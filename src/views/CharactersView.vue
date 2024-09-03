<script setup>
import { useGetData } from '@/composables/getData';

const { getData, data, loading, errorData } = useGetData();

getData('https://dragonball-api.com/api/characters')
</script>

<template>
  <section class="characters">
    <h1 class="title">Personajes</h1>
    <p v-if="loading">Cargando...</p>
    <p v-if="errorData">{{ errorData }}</p>

    <div v-if="data">
      <ul class="characters__container">
        <li v-for="(character) in data.items" :key="character.id" class="li__characters">
          <router-link :to="`/characters/${character.id}`" class="character__link">
            {{ character.name }}
            <img :src="character.image" :alt="character.name" width="auto" height="200">
          </router-link>
        </li>
      </ul>
      <div class="btn__container">
        <button :disabled="!data.links.previous" @click="getData(data.links.previous)"
          class="btn-pagination">Anterior</button>
        <button :disabled="!data.links.next" @click="getData(data.links.next)" class="btn-pagination">Siguiente</button>
      </div>
    </div>
  </section>
</template>

<style>
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
}

.li__characters {
  border: 2px solid rgb(83, 83, 83);
  box-shadow: 2px 2px 5px 0px rgb(83, 83, 83);
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
}

.btn__container {
  display: flex;
  justify-content: center;
  margin: 10px 5px;
}

.btn-pagination {
  border: 1px solid rgb(0, 255, 170);
  color: rgb(0, 255, 170);
  border-radius: 10px;
  padding: 10px;
  font-size: 18px;
  width: 120px;
  margin: 5px 10px;
  cursor: pointer;
  background-color: transparent;
}

.btn-pagination:disabled {
  background-color: rgb(83, 83, 83);
  border: 1px solid rgb(83, 83, 83);
  color: rgb(139, 139, 139);
}
</style>
