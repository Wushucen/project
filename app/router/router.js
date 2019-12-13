import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    base:   process.env.BASE_URL,
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
            path: '/',
            name:'login',
            redirect:"/login",
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
                name: 'login'
            }
        },
        {
            path: '/404',
            component: () => import('@/views/404'),
            hidden: true
          },
           // 404 page must be placed at the end !!!
        { path: '*', redirect: '/404', hidden: true }
    ]
});

export default router;












           