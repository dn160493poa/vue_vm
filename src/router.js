import { createWebHistory, createRouter } from "vue-router";

const routes = [
    {
        path: '/', component: () => import('./views/Home'),
        name: 'home.index'
    },
    {
        path: '/tasks', component: () => import('./components/Task/Index'),
        name: 'tasks.index'
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;