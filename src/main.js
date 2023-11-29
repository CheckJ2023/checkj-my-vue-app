import { createApp } from 'vue'
// 2. vue-router:imprt VueRouter需要用到的方法
// import { createRouter, createWebHistory } from 'vue-router'

import './style.css';
import App from './App.vue';
import router from './router.js';
import * as bootstrap from 'bootstrap';
//for bootsrap
import "bootstrap/scss/bootstrap.scss";


const app = createApp(App);

// 5. vue-router:將vue-router設定到vue APP內
app.use(router.router);

// for bootstrap
app.use(bootstrap);

app.mount('#app');