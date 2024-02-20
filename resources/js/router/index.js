import { createRouter, createWebHistory } from 'vue-router'
import { HomePage } from '../components'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/projet_web/laravel_vue_vite/public/',
      name: 'home',
      component: HomePage
    },
  ] 
})

export default router
