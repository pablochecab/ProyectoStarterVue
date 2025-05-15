import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginGuay from '../views/LoginGuay.vue'
import Register from '../views/Register.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/', // A este link va el routerLink de App.vue
      name: 'home',
      component: HomeView,
      //beforeEnter: verificarToken
    },
    {
      path: '/login',
      name: 'login',
      component: LoginGuay,
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
    },
  ],
})

export default router
