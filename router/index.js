// router/index.js
import { createRouter, createWebHistory } from "vue-router";
import Login from "../src/components/Login.vue";
import Portal from "../src/components/Portal.vue";
import Portal2 from "../src/components/Portal2.vue";
import Process from "../src/components/Process.vue";
import Personnel from "../src/components/Personnel.vue";
import Documents from "../src/components/Documents.vue";
import Projects from "../src/components/Projects.vue";
import Search from "../src/components/Search.vue";
import ServiceGuide from "../src/components/ServiceGuide.vue";
import ITGuide from "../src/components/ITGuide.vue";
import CompanyPortal from "../src/components/CompanyPortal.vue";
import NewProcess from "../src/components/NewProcess.vue";
import ToDoProcess from "../src/components/ToDoProcess.vue";
import CompletedProcess from "../src/components/CompletedProcess.vue";

import MyCard from "../src/components/MyCard.vue";
import MySalary from "../src/components/MySalary.vue";
import MyAttendance from "../src/components/MyAttendance.vue";
import MyDocuments from "../src/components/MyDocuments.vue";
import MyInvestigation from "../src/components/MyInvestigation.vue";
import DocumentRecycleBin from "../src/components/DocumentRecycleBin.vue";
import MyProjects from "../src/components/MyProjects.vue";
import ProjectManagement from "../src/components/ProjectManagement.vue";

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/Portal",
    name: "Portal",
    component: Portal,
    children: [
      {
        path: "/Portal2",
        component: Portal2, // 子页面
        children: [
          {
            path: "/CompanyPortal",
            component: CompanyPortal,
          },
          {
            path: "/ServiceGuide",
            component: ServiceGuide,
          },
          {
            path: "/ITGuide",
            component: ITGuide,
          },
        ],
      },
      {
        path: "/Process",
        component: Process,
        children: [
          {
            path: "/NewProcess",
            component: NewProcess,
          },
          { path: "/ToDoProcess", component: ToDoProcess },
          { path: "/CompletedProcess", component: CompletedProcess },
        ],
      },
      {
        path: "/Personnel",
        component: Personnel,
        children: [
          {
            path: "/MyCard",
            component: MyCard,
          },
          { path: "/MySalary", component: MySalary },
          { path: "/MyAttendance", component: MyAttendance },
        ],
      },
      {
        path: "/Documents",
        component: Documents,
        children: [
          {
            path: "/MyDocuments",
            component: MyDocuments,
          },
          { path: "/MyInvestigation", component: MyInvestigation },
          { path: "/DocumentRecycleBin", component: DocumentRecycleBin },
        ],
      },
      {
        path: "/Projects",
        component: Projects,
        children: [
          { path: "/MyProjects", component: MyProjects },
          { path: "/ProjectManagement", component: ProjectManagement },
        ],
      },
      {
        path: "/Search",
        component: Search,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
