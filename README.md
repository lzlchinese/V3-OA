# V3-OA

使用 VUE3 + Vite 搭建的 OA 系统

## 搭建 Vue3

```bash
  pnpm create vite@latest V3-OA --template vue
  pnpm install
  pnpm run dev
```

## 安装 element-plus

1. 安装 Element Plus

```bash
  pnpm install element-plus
```

2. 在项目中使用 Element Plus

```javascript
// 引入 Element Plus 和样式
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

const app = createApp(App);

// 使用 Element Plus
app.use(ElementPlus);
```

## 安装 router

1. 安装 vue-router

```bash
  npm install vue-router
```

2. 配置 router

```javascript
import { createRouter, createWebHistory } from "vue-router";

// 导入组件
import Home from "../components/Home.vue";
import About from "../components/About.vue";

// 配置路由
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
];

// 创建路由实例
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // 使用 HTML5 History 模式
  routes,
});

export default router;
```

3. 在 main.js 中挂载路由

```javascript
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router"; // 引入路由配置

const app = createApp(App);

// 使用路由
app.use(router);

app.mount("#app");
```

4. 在 App.vue 中加上 <router-view>

```javascript
<template>
  <div>
    <router-view></router-view> <!-- 这里会显示相应的组件 -->
  </div>
</template>
```

5. 跳转路由

```javascript
<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

function goToAbout() {
  router.push('/about');
}
</script>
```

## 知识点

1. 父子传值

父传子

父组件 App.vue

```javascript
<Login title="xxx" />;
defineProps({
  title: String,
});
<h1>{{ title }}</h1>;
```

子组件 Login.vue

```javascript
defineProps({
  title: String,
});
<h1>{{ title }}</h1>;
```

2. 路由跳转

```javascript
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const route = useRoute();
router.push(path) // 可以进行路由跳转
route.path // 获取当前路由path
```
