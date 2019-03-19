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
            component: resolve => require(['../components/index.vue'], resolve),
        },
        {
            path: '/vmodel',
            name: 'vmodel',
            component: resolve => require(['../components/vmodel.vue'], resolve),
            children: [
                { path: 'upcase', name: 'upcase', component: resolve => require(['../components/upcase.vue'], resolve)}
            ]
        },
        {
            path: '/dynamic/:num',
            name: 'dynamic',
            component: resolve => require(['../components/dynamic.vue'], resolve)
        },
        {
            // 使用通配符匹配路由
            path: '/test*',
            component: resolve => require(['../components/test.vue'], resolve)
        }
    ]
})