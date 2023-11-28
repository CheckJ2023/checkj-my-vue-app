
import { createRouter, createWebHistory } from 'vue-router'
import Login from './pages/Login.vue'
import Products from './pages/Products.vue'
// import Products_Management from './pages/Products-Management.vue'

const routes = [
    { 
        path: '/', 
        component: Login, 
    },
    { 
        path: '/Products', 
        component: Products, 
    },
    // { 
    //     path: '/Products-Management', 
    //     component: Products_Management, 
    // },
    // {
    //     path: '/HelloWorld',
    //     component: HelloWorld
    // }
  ]

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
})

export default {
    router
}