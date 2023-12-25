import { createApp } from 'vue'
// 2. vue-router:imprt VueRouter需要用到的方法
// import { createRouter, createWebHistory } from 'vue-router'

import './style.css';
import App from './App.vue';
import router from './router.js';
import * as bootstrap from 'bootstrap';
//for bootsrap
import "bootstrap/scss/bootstrap.scss";

import axios from 'axios';
// axios.defaults.baseURL = 'http://34.135.154.133:8080'

// //for md
// import VueResource from "vue-resource";

const app = createApp(App);



// 5. vue-router:將vue-router設定到vue APP內
app.use(router.router);

// // for md
// Vue.use(VueResource);

// for bootstrap
app.use(bootstrap);
app.provide('baseBackendUrl','http://34.135.154.133:8080')
app.provide('baseFrontendUrl','http://34.135.154.133')

app.mount('#app');