// router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Login from '../src/components/Login.vue';
import Portal from '../src/components/Portal.vue';

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
  },
  {
    path: '/Portal',
    name: 'Portal',
    component: Portal,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;