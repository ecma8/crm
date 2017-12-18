import Vue from 'vue'
import App from './App.vue'

import axios from 'axios'
import router from './route.js'
import store from './vuex.js'
import './filter.js'
import Loading from './components/Loading'

Vue.use(Loading);
const instance = axios.create({
    baseURL: 'http://open.ecma8.com'
});
Vue.prototype.$http = instance;

// global.API_ROOT='http://localhost:89';
// global.IMG_ROOT='http://127.0.0.1:8081/';

const app = new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app');

