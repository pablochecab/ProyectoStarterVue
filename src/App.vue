<script setup>
import { RouterLink, RouterView } from 'vue-router'

import HomeView from './views/HomeView.vue';

import Toast from 'primevue/toast';

// const myHeaders = new Headers();
// myHeaders.append("Content-Type", "application/json");

// const raw = JSON.stringify({
//   "usuario": "user",
//   "contrasenia": "1234"
// });

// const requestOptions = {
//   method: "POST",
//   headers: myHeaders,
//   body: raw,
//   redirect: "follow"
// };

// fetch("http://localhost:8080/auth/login", requestOptions)
//   .then((response) => response.text())
//   .then((result) => console.log(result))
//   .catch((error) => console.error(error));


</script> 

<template>
  <RouterView />
</template>

<style scoped>
 
</style>
