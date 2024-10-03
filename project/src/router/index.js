import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import aboutView from '../views/about.vue';  
import NotFound from '../views/NotFound.vue'; 
import WorkView from '../components/WorkView.vue';  
import GithubPage from '@/components/GithubPage.vue';
import CvView from '../components/CvView.vue';
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
      path: '/work',   
      name: 'work',
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

  {
    path: '/Cv',
    name: 'Cv', 
    component: CvView
  }

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;