import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// 引入 Element Plus 和样式
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 引入 路由
import router from '../router';

const app = createApp(App)

app.use(ElementPlus)
app.use(router)
app.mount('#app')
