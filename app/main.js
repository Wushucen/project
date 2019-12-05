import Vue from 'vue';
import elementui from 'element-ui';
import ViewUI from 'view-design';

import App from './App.vue';
import router from './router/router.js';

Vue.use(elementui);
Vue.use(ViewUI);

new Vue({
    'el': '#app',
    render(h){
        return h(App);
    },
    router
})