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
            path: '/index',
            name:'index',
            component: ()=>import('../views/index/Index.vue'),
            // children:[
            //         {
            //             path: 'index',
            //             name :'index',
            //             meta: {'name': 'index'},
            //             component: ()=>import('../views/index/index.vue')
            //         }
            //     ]
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












           