import Home from './components/Home.vue';
import Blogs from './components/Pages/Blogs/Blogs.vue';
import ProjectsRoute from './components/Pages/Projects/ProjectsRoute.vue';
import ContactRoute from './components/Pages/Contact/ContactRoute.vue';
import AboutMe from './components/Pages/AboutMe/AboutMe.vue'

import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        name : 'Home',
        component : Home,
        path : '/'
    },
    {
        name : 'ProjectsRoute',
        component : ProjectsRoute,
        path : '/projects'
    },
    {
        name : 'ContactRoute',
        component : ContactRoute,
        path : '/contact'
    },
    {
        name : 'Blogs',
        component : Blogs,
        path : '/blogs'
    },
    {
        name : 'AboutMe',
        component : AboutMe,
        path : '/about'
    }
];

const router = createRouter({
    history : createWebHistory(),
    routes
})

export default router;