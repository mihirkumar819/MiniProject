import HeaderOne from '../components/HeaderOne.vue'
import { createWebHistory, createRouter } from "vue-router";
const routes = [
    {
        path:"/",
        name : "Home",
        component : HeaderOne
    },
    // {
    //     path:"/cart",
    //     name : "CartApp",
    //     component : CartApp
    // }
]

const router = createRouter({
    history : createWebHistory(),
    routes
})

export default router
