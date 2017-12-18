import Vue from 'vue'
import VueRouter from 'vue-router'

const Vuex = resolve => require(['./components/Vuex.vue'], resolve);

const Home = resolve => require(['./components/Home.vue'], resolve);
const Login = resolve => require(['./components/Pages/Login.vue'], resolve);
const Nav = resolve => require(['./components/Pages/Nav.vue'], resolve);

const Page_1 = resolve => require(['./components/Pages/Page_1.vue'], resolve);
const Page_2 = resolve => require(['./components/Pages/Page_2.vue'], resolve);
const Page_3 = resolve => require(['./components/Pages/Page_3.vue'], resolve);
const Page_4 = resolve => require(['./components/Pages/Page_4.vue'], resolve);
const Page_5 = resolve => require(['./components/Pages/Page_5.vue'], resolve);
const Page_6 = resolve => require(['./components/Pages/Page_6.vue'], resolve);
const Page_7 = resolve => require(['./components/Pages/Page_7.vue'], resolve);
const Page_8 = resolve => require(['./components/Pages/Page_8.vue'], resolve);
const Page_9 = resolve => require(['./components/Pages/Page_9.vue'], resolve);
const Page_10 = resolve => require(['./components/Pages/Page_10.vue'], resolve);
Vue.use(VueRouter);
const routes=[
    {
        path: '/',
        name:'login',
        component: Login,
    },
    {
        path: '/home',
        name:'',
        component: Home,
        redirect:{
            name:'page_1'
        },
        children:[

            {
                path: '/page_1',
                name:'page_1',
                component: Page_1,
            },
            {
                path: '/page_2',
                name:'page_2',
                component: Page_2,
            },
            {
                path: '/page_3',
                name:'page_3',
                component: Page_3,
            },
            {
                path: '/page_4',
                name:'page_4',
                component: Page_4,
            },
            {
                path: '/page_5',
                name:'page_5',
                component: Page_5,
            },
            {
                path: '/page_6',
                name:'page_6',
                component: Page_6,
            },
            {
                path: '/page_7',
                name:'page_7',
                component: Page_7,
            },
            {
                path: '/page_8',
                name:'page_8',
                component: Page_8,
            },
            {
                path: '/page_9',
                name:'page_9',
                component: Page_9,
            },
            {
                path: '/page_10',
                name:'page_10',
                component: Page_10,
            }
        ]
    },
    {
        path: '/nav',
        name:'nav',
        component: Nav
    },
    {
        path: '/vuex',
        name:'vuex',
        component: Vuex
    },
];

export default new VueRouter({
    routes:routes
})
