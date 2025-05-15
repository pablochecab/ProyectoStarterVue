<script setup>
import Button from 'primevue/button';
import { onMounted } from 'vue'
import { useToast } from 'primevue/usetoast';

const toast = useToast()

onMounted(() => {
    toast.add({
    severity: 'success',
    summary: '¡Sesión iniciada!',
    detail: `¡Bienvenido!`,
    life: 3000
  });
  });

</script>

<template>
  <div class="h-screen flex items-center justify-center bg-gray-900">
    <section class="rounded-2xl w-min p-6 flex flex-col bg-zinc-600 items-center text-center gap-4 text-white">
      <article>
        <h1 class="text-7xl">Bienvenido!</h1>
        <p class="text-2xl">Escoge una opción</p>
      </article>
      <article class="flex gap-5">
        <div class="card flex justify-center">
          <Button>
            <RouterLink to="/login">Login</RouterLink>
          </Button>
        </div>
        <div class="card flex justify-center">
          <Button>
            <RouterLink to="/register" label="Register">Register</RouterLink>
          </Button>
        </div>
      </article>
    </section>
  </div>
  <Toast />
</template>