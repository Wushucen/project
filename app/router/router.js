import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {
            path: '/home',
            component: ()=>import('../views/Home.vue'),
            children:[
                {
                    path: 'home',
                    name :'home',
                    meta: {'name': 'home'},
                    component: ()=>import('../views/Home.vue')
                }
            ]
        },
        {
        path: '/index',
        component: ()=>import('../layouts/Index.vue'),
        children:[
                {
                    path: 'index',
                    name :'index',
                    meta: {'name': 'index'},
                    component: ()=>import('../views/index/index.vue')
                }
            ]
        },
        {
            path: '*',
            redirect: {
                name: 'home'
            }
        }
    ]
});

export default router;












           