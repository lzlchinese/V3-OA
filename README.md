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

1.对比之前的vue2，vue3升级了什么

```
· 使用了Composition API，提高了代码逻辑的可复用性。
  （Composition API是Vue 3中的一个新特性，它允许开发者以更灵活和可复用的方式组织组件逻辑。通过使用Composition API，可以更好地组织代码和管理状态。）
· 引入了Fragment，允许组件有多个根节点。
  （Fragment是用来承载多个子元素的虚拟组件。在Vue 2中，使用v-for迭代元素时需要添加一个包装元素，而Vue 3中的Fragment解决了这个问题。）
· 提供了更好的TypeScript支持。
· 使用了更小的包体积和更高效的运行时性能。
· 提供了Suspense组件，用于处理异步组件的加载状态。
  （Suspense组件用于实现延迟加载和错误处理。在组件中加入Suspense，可以让异步组件渲染出加载状态，并且如果异步组件加载时出现错误，也能够处理这些错误。）
· Teleport组件允许将子组件渲染到DOM中的任何位置。
  （Teleport是Vue 3中控制渲染位置的新指令，它允许在DOM中移动一个组件的内容而不改变组件的父级。）
```

2.请解释Vue 3的Composition API是什么？

```
Composition API是一组新的、基于函数的API，它允许开发者以更灵活和可复用的方式组织组件逻辑。
它主要包括ref、reactive、computed、watch、setup等函数和钩子。
其中，setup()是Vue 3组件选项API中的一个新选项，是Composition API的入口点，在组件被创建之前执行，用于初始化状态、计算属性和方法，并返回在模板中使用的响应式引用。
```

3. 父子传值

父传子

父组件 App.vue

```javascript
<Login :title="xxx" />;
```

子组件 Login.vue

```javascript
defineProps({
  title: String,
});
<h1>{{ title }}</h1>;
```

子传父

子组件 Login.vue

```javascript
<el-button type="primary" @click="submitForm(ruleFormRef )"> 确认 </el-button>

const emit = defineEmits(['getPermanentform']);
const submitForm = async (ruleFormRef) => {
  if (!ruleFormRef) return;
  await ruleFormRef.validate((valid, fields) => {
    if (valid) {
      emit('getPermanentform', Permanentform);
      console.log("submit!");
    } else {
      console.log("error submit!", fields);
    }
  });
};

```

父组件 App.vue

```javascript
<Permanent
  @getPermanentform="getPermanentform"
/>

const getPermanentform = (data) => {
  console.log("确认按钮被点击", data.value);
  dialogFormVisible.value = false;
};
```

4. 路由跳转

```javascript
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const route = useRoute();
router.push(path); // 可以进行路由跳转
route.path; // 获取当前路由path
```

5. 引入css样式文件

（1）全局css文件

在main.js文件中

```javascript
// 导入全局样式文件
import "./assets/styles/common.css";
```

（2）单个文件

    在单个文件中

```javascript
<style scoped>@import "../../assets/styles/secondary-nav.css";</style>
```
