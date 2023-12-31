
import { createRouter, createWebHistory } from 'vue-router'
import Login from './pages/Login.vue'
import Products from './pages/Products.vue'
import ProductsManagement from './pages/Products-Management.vue'
// import User from './pages/User.vue'
// import Bootstrap from './pages/BootstrapProfile.vue'
import mycreations from './pages/MyCreations.vue';
import project01VoiceAssistant from './pages/Project01-VoiceAssistant.vue';
import project02AILibrary from './pages/Project02-AILibrary.vue';
const routes = [
    { 
        path: '/', 
        component: mycreations, 
    },
    { 
        path: '/project01', 
        component: project01VoiceAssistant, 
    },
    { 
        path: '/project02', 
        component: project02AILibrary, 
    },
    { 
        path: '/login', 
        component: Login, 
    },
    { 
        path: '/Products', 
        component: Products, 
    },
    { 
        path: '/Products-Management', 
        component: ProductsManagement, 
    },
    // {
    //     path: '/projectExample', 
    //     component: projectExample, 
    // }
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