import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
// import AboutPage from '@/views/AboutPage.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
        path: '/',
        name: 'home',
        component: HomePage,
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('../views/AboutPage.vue'),
    },
  ],
});

export default router;
