<script setup>
import { useRoute } from 'vue-router';
import { useGetData } from '@/composables/getData';

const route = useRoute();
const { getData, data, loading, errorData } = useGetData();

getData(`https://dragonball-api.com/api/characters/${route.params.id}`);

const handleImageError = (e) => {
  e.target.style.display = 'none';
}

</script>

<template>
  <div class="detail__container">
    <p v-if="loading">Cargando...</p>
    <p v-if="errorData">{{ errorData }}</p>

    <div v-if="data">
      <h1 class="title">{{ data.name }}</h1>
      <div class="character__container">

        <div class="div1">
          <img :src="data.image" :alt="data.name" width="auto" height="400">
        </div>
        <div class="div2">
          <p>{{ data.race }}</p>
          <p>{{ data.gender }}</p>
          <p>{{ data.ki }}</p>
          <p>{{ data.description }}</p>
        </div>

        <p class="title">Planeta de origen</p>
        <div class="div3">
          <img :src="data.originPlanet.image" :alt="data.originPlanet.name" width="auto" height="100">
        </div>
        <div class="div4">
          <p>Nombre del planeta: {{ data.originPlanet.name }}</p>
          <p>Descripción del planeta: {{ data.originPlanet.description }}</p>
        </div>

        <p class="title">Transformaciones</p>
        <div class="div5">
          <div v-for="(transform) in data.transformations" :key="transform.id" class="info__characters">
            <img :src="transform.image" :alt="transform.name" width="auto" height="150" @error="handleImageError">
            <p>Nombre: {{ transform.name }}</p>
            <p>Ki: {{ transform.ki }}</p>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>
.title {
  margin: 10px;
  font-size: 34px;
  text-align: center;
}

.detail__container {
  /* border: 1px solid rgb(255, 0, 191); */
  margin: 20px 0px;
}

.character__container {
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: auto auto auto;
  gap: 8px;
  /* border: 1px solid lime; */
}

img {
  width: fit-content;
}

.info__characters {
  border: 2px solid rgb(83, 83, 83);
  box-shadow: 2px 2px 5px 0px rgb(83, 83, 83);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  place-items: center;
  font-size: 18px;
  min-width: 200px;
  height: auto;
  min-height: 100px;
}

.div1,
.div3 {
  grid-column: 1 / 2;
  display: flex;
  justify-content: center;
  align-items: center;
}

.div2,
.div4 {
  grid-column: 2 / 3;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 50px;
  /* border: 1px solid rgb(255, 0, 191); */

}

.div5 {
  grid-column: 1 / 3;
  display: flex;
  justify-content: space-between;
  /* border: 1px solid rgb(255, 0, 191); */
}
</style>