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

## 知识点

1. 父子传值

```text
  父传子
  父组件App.vue
  <Login title="xxx" />
  子组件Login.vue
  defineProps({
    title: String,
  });
  <h1>{{ title }}</h1>
```
