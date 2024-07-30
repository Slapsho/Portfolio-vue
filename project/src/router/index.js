import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/about.vue'; 
import Work from '../views/Work.vue'; 
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
    component: AboutView
  },
  {
    path: '/Work',
    name: 'Work',
    component: Work
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
