// router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Login from '../src/components/Login.vue';
import Portal from '../src/components/Portal.vue';
import CompanyPortal from '../src/components/CompanyPortal.vue';
import NewProcess from '../src/components/NewProcess.vue';
import MyCard from '../src/components/MyCard.vue';
import MyDocuments from '../src/components/MyDocuments.vue';
import MyProjects from '../src/components/MyProjects.vue';
import Search from '../src/components/Search.vue';
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
    children: [
      {
        path: '/CompanyPortal',
        component: CompanyPortal,  // 子页面
      },
      {
        path: '/NewProcess',
        component: NewProcess,  // 子页面
      },
      {
        path: '/MyCard',
        component: MyCard,
      },
      {
        path: '/MyDocuments',
        component: MyDocuments,
      },{
        path: '/MyProjects',
        component: MyProjects,
      },
      {
        path: '/Search',
        component: Search,
      }

    ],
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
