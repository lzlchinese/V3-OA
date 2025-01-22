// router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Login from '../src/components/Login.vue';
import Portal from '../src/components/Portal.vue';
import Page1 from '../src/components/Page1.vue';
import Page2 from '../src/components/Page2.vue';

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
  {
    path: '/Page1',
    name: 'Page1',
    component: Page1,
  },
  {
    path: '/Page2',
    name: 'Page2',
    component: Page2,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
