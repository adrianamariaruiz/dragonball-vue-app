import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: HomeView
    },
    {
      path: '/characters',
      name: 'personajes',
      component: () => import('../views/CharactersView.vue')
    },
    {
      path: '/characters/:id',
      name: 'personaje',
      component: () => import('../views/CharacterDetailView.vue')
    }
  ]
})

export default router
