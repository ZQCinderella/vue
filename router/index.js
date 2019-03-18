import Vue from 'vue'
import VueRouter from 'vue-router'
import { resolve } from 'path';
Vue.use(VueRouter)
export default new VueRouter({
    // mode: 'history',
    // base: __dirname,
    routes: [
        {
            path: '/',
            name: 'index',
            component: resolve => require(['../components/index.vue'], resolve)
        },
        {
            path: '/vmodel',
            name: 'vmodel',
            component: resolve => require(['../components/vmodel.vue'], resolve)
        }
    ]
})