import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";

import Echarts from "vue-echarts";
import * as echarts from "echarts";

// 引入 Element Plus 和样式
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
// 修改 Element Plus 的语言为中文
import locale from "element-plus/es/locale/lang/zh-cn";
// 引入 路由
import router from "../router";
// 导入全局样式文件
import "./assets/styles/common.css";

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(ElementPlus, { locale });
app.use(router);
// 使用组件
app.component("e-charts", Echarts);
// 全局挂载 echarts（可选）
app.config.globalProperties.$echarts = echarts;
app.mount("#app");
