
import { createRouter, createWebHistory } from 'vue-router'
// import Login from './pages/Login.vue'
// import Products from './pages/Products.vue'
// import ProductsManagement from './pages/Products-Management.vue'
// import User from './pages/User.vue'
// import Bootstrap from './pages/BootstrapProfile.vue'
import mycreations from './pages/MyCreations.vue';

const routes = [
    { 
           path: '/', 
           component: mycreations, 
    }
    // { 
    //     path: '/', 
    //     component: Login, 
    // },
    // { 
    //     path: '/Products', 
    //     component: Products, 
    // },
    // { 
    //     path: '/Products-Management', 
    //     component: ProductsManagement, 
    // },
    // { 
    //     path: '/User', 
    //     component: User, 
    // },
    // { 
    //     path: '/Bootstrap', 
    //     component: Bootstrap, 
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