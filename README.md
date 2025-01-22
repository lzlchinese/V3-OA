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

6. 导航栏路由跳转

注意，在 App.vue 中的 router-view 就不能在这边使用了，这边修改成

```javascript
<div class="login-body">
  <Login v-if="$route.path === '/'" />
  <Home v-else />
</div>
```

然后在 Portal 页面使用 element 组件 el-menu 和 router-view

```text
<script lang="ts" setup>
import { useRoute } from "vue-router";

const route = useRoute();
const activeIndex = ref("/Page1");
<script />

<template>
  <el-container>
    <el-aside width="100%">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        router
        :ellipsis="false"
      >
        <el-menu-item index="/Page1">Page1</el-menu-item>
        <el-menu-item index="/Page2">Page2</el-menu-item>
      </el-menu>
    </el-aside>
  </el-container>
  <el-main>
    <router-view></router-view>
  </el-main>
</template>
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
