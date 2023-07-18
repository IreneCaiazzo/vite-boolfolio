import { createRouter, createWebHistory } from 'vue-router';

//importare i componenti che definiscono le varie pagine
import AppHome from './pages/AppHome.vue';
import ProjectsIndex from './pages/ProjectsIndex.vue';
import ProjectsShow from './pages/ProjectsShow.vue';
import AppAbout from './pages/AppAbout.vue';
import App404 from './pages/App404.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome,
        },
        {
            path: '/about',
            name: 'about',
            component: AppAbout,
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
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'page404',
            component: App404,
        },
    ]
});

export { router };