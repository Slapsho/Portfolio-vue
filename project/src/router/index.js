// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import About from '../view/about.vue';
import GithubPage from '../views/GithubPage.vue'; // Importer le nouveau composant
import NotFound from '../views/NotFound.vue'; 

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/:catchAll(.*)',
    name: 'GithubPage',
    component: GithubPage // Définir la route pour le nouveau composant
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
