import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Work from '../views/Work.vue';
import NotFound from '../views/NotFound.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/work', component: Work },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
