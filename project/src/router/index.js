import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/Home.vue';
import AboutView from '../views/about.vue'; 
import PresentationView from '../views/Presentation.vue'; 
import ProjectView from '../views/Project.vue'; 
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
    path: '/presentation',
    name: 'Presentation',
    component: PresentationView
  },
  {
    path: '/project',
    name: 'Project',
    component: ProjectView
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
