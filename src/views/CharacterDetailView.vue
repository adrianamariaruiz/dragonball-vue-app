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
          <p>Raza: {{ data.race }}</p>
          <p>Género: {{ data.gender }}</p>
          <p>ki: {{ data.ki }}</p>
          <p>Descripción: {{ data.description }}</p>
        </div>
        <div class="div3">
          <h3 class="subTitle">Planeta de origen</h3>
          <img :src="data.originPlanet.image" :alt="data.originPlanet.name" width="auto" height="100">
        </div>
        <div class="div4">
          <p>Nombre del planeta: {{ data.originPlanet.name }}</p>
          <p>Descripción del planeta: {{ data.originPlanet.description }}</p>
        </div>


        <div class="div5" v-if="data.transformations.length > 0">
          <h3 class="subTitle">Transformaciones</h3>
          <div class="info__characters--container">
            <div v-for="(transform) in data.transformations" :key="transform.id" class="info__characters">
              <img :src="transform.image" :alt="transform.name" width="auto" height="150" @error="handleImageError">
              <p>Nombre: {{ transform.name }}</p>
              <p>Ki: {{ transform.ki }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>
.title {
  margin: 10px;
  font-size: 46px;
  text-align: center;
}

.subTitle {
  margin: 10px 00px;
  font-size: 32px;
  text-align: center;
}

.detail__container {
  margin: 20px 0px;
}

.character__container {
  display: grid;
  grid-template-columns: 2fr 2fr;
  grid-template-rows: auto auto auto;
  gap: 8px;
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
  padding: 5px 10px;
  min-width: 200px;
  width: 250px;
  height: auto;
  min-height: 100px;
}

.info__characters--container {
  display: flex;
  justify-content: space-between;
  gap: 20px 5px;
  flex-wrap: wrap;
}

.div1,
.div3 {
  grid-column: 1 / 2;
  display: grid;
  justify-items: center;
  padding: 20px;
}

.div2,
.div4 {
  grid-column: 2 / 3;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 50px;

}

.div5 {
  grid-column: 1 / 3;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>