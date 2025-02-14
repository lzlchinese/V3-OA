// router/index.js
import { createRouter, createWebHistory } from "vue-router";
import Login from "../src/components/Login.vue";
import Home from "../src/components/Home.vue";

// Portal
import Portal from "../src/components/Portal/Portal.vue";
import CompanyPortal from "../src/components/Portal/CompanyPortal.vue";
import ServiceGuide from "../src/components/Portal/ServiceGuide.vue";
import ITGuide from "../src/components/Portal/ITGuide.vue";

// Process
import Process from "../src/components/Process/Process.vue";
import NewProcess from "../src/components/Process/NewProcess.vue";
import ToDoProcess from "../src/components/Process/ToDoProcess.vue";
import CompletedProcess from "../src/components/Process/CompletedProcess.vue";

// Personnel
import Personnel from "../src/components/Personnel/Personnel.vue";
import MyCard from "../src/components/Personnel/MyCard.vue";
import MySalary from "../src/components/Personnel/MySalary.vue";
import MyAttendance from "../src/components/Personnel/MyAttendance.vue";

// Documents
import Documents from "../src/components/Documents/Documents.vue";
import MyDocuments from "../src/components/Documents/MyDocuments.vue";
import MyInvestigation from "../src/components/Documents/MyInvestigation.vue";
import DocumentRecycleBin from "../src/components/Documents/DocumentRecycleBin.vue";

// Projects
import Projects from "../src/components/Projects/Projects.vue";
import MyProjects from "../src/components/Projects/MyProjects.vue";
import ProjectManagement from "../src/components/Projects/ProjectManagement.vue";

// Search
import Search from "../src/components/Search/Search.vue";

// Users
const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/Home",
    name: "Home",
    component: Home,
    redirect: "/CompanyPortal",
    children: [
      {
        path: "/Portal",
        component: Portal,
        redirect: "/CompanyPortal",
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
        redirect: "/NewProcess",
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
        redirect: "/MyCard",
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
        redirect: "/MyDocuments",
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
        redirect: "/MyProjects",
        children: [
          { path: "/MyProjects", component: MyProjects },
          // { path: "/ProjectManagement", component: ProjectManagement },
        ],
      },
      {
        path: "/Search",
        component: Search,
      },
    ],
  },
];

// Users
const AdminRoutes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/Home",
    name: "Home",
    component: Home,
    redirect: "/CompanyPortal",
    children: [
      {
        path: "/Portal",
        component: Portal,
        redirect: "/CompanyPortal",
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
        redirect: "/NewProcess",
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
        redirect: "/MyCard",
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
        redirect: "/MyDocuments",
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
        redirect: "/MyProjects",
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

// async function generateRoutes() {
//   const permission = await getUserPermission();
//   const router = null;
//   if (permission === "user") {
//     router = createRouter({
//       mode: "history",
//       routes: routes,
//     });
//   } else if (permission === "admin") {
//     router = createRouter({
//       mode: "history",
//       routes: AdminRoutes,
//     });
//   }
//   return router;
// }

// export default generateRoutes();
