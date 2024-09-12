import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import aboutView from '../views/about.vue';  
import NotFound from '../views/NotFound.vue'; 
import WorkView from '@/views/WorkView.vue';
import GithubPage from '@/views/GithubPage.vue';
const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: aboutView
  },
  {
    path: '/Work',
    name: 'Work',
    component: WorkView
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  },

  {
    path: '/Github',
    name: 'Github',
    component: GithubPage
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
