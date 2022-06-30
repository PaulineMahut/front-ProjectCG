import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/inscription',
      name: 'inscription',
      component: () => import('../views/Inscription.vue')
    },
    {
      path: '/Connexion',
      name: 'Connexion',
      component: () => import('../views/Connexion.vue')
    },
    {
      path: '/addArticle',
      name: 'addArticle',
      component: () => import('../views/AddArticleView.vue')
    },
    {
      path: '/boutique',
      name: 'boutique',
      component: () => import('../views/BoutiqueVue.vue')
    }
  ]
})

export default router
