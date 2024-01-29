import { createRouter, createWebHistory } from 'vue-router';
import AboutView from '../views/AboutView.vue';
import HomeView from '../views/HomeView.vue';
import Jobs from '../views/Jobs.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component: Jobs,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
