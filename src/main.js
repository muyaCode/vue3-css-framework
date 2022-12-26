import { createApp } from 'vue';
import App from './App.vue';
import "./style.css"
// 引入浏览器重置样式
import "normalize.css/normalize.css";
import router from "./router/index.js";
import store from "./store/index.js";
import Mui from "./components";
import "./mock";
import "lib-flexible/flexible.js"

const app = createApp(App)

app.use(router)
app.use(store)
app.use(Mui)
app.use(store)
app.mount('#app')
