import { createRouter, createWebHistory } from 'vue-router';

//importare i componenti che definiscono le varie pagine
import AppHome from './pages/AppHome.vue';
import ProjectsIndex from './pages/ProjectsIndex.vue';
import ProjectsShow from './pages/ProjectsShow.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome,
        },
        {
            path: '/projects',
            name: 'projects.index',
            component: ProjectsIndex,
        },
        {
            path: '/projects/:slug',
            name: 'projects.show',
            component: ProjectsShow,
        }
    ]
});

export { router };