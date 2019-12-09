import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {
            path: '/home',
            name:'home',
            component: ()=>import('../layouts/Home.vue'),
        },
        {
            path: '/tree',
            name:'tree',
            component: ()=>import('../views/index/tree.vue'),
        },
        {
            path: '/table',
            name:'table',
            component: ()=>import('../views/index/table.vue'),
        },
        {
            path: '/login',
            name:'login',
            component: ()=>import('../views/index/login.vue'),
        },
        {
            path: '/select',
            name:'select',
            component: ()=>import('../views/index/select.vue'),
        },
        {
            path: '/user',
            name:'user',
            component: ()=>import('../views/index/user.vue'),
        },
        {
            path: '*',
            redirect: {
                name: 'user'
            }
        }
    ]
});

export default router;












           