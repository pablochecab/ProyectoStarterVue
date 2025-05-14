<script setup>
import { RouterLink, RouterView } from 'vue-router'

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
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/login">Login</RouterLink>
      </nav>
    </div>
  </header>
  <Toast />



  <RouterView />
</template>

<style scoped>
 
</style>
