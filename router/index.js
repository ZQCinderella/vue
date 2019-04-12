import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
export default new VueRouter({
    mode: 'history', // history模式url会比较好看，：3000/index/...  但是如果匹配不到对应的路由时，页面会白屏，需要后台去对所有情况进行覆盖。 而不使用history模式的话，：3000/#/index/..., 当有匹配不到的路由时，会定位到首页
    /**
     * 例如nginx配置 
     * location / {
     *    try_files $uri $uri/ /index.html;
     * }
     */
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
                { path: 'upcase', name: 'upcase', component: resolve => require(['../components/upcase.vue'], resolve), meta: { keepAlive: true }}
            ],
            meta: {
                title: '这是model',
                prev: '',
                level: '',
                head:false,
                footer: false,
                keepAlive: true
            }
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
        },
        {
            path: '/transition',
            component: resolve => require(['../components/transition.vue'], resolve)
        },
        {
            path: '/fatherOfVueclass',
            component: resolve => require(['../view/FatherOfVueClassCom.vue'], resolve)
        },
        {
            path: '/vueclass',
            component: resolve => require(['../view/VueClassComponent.vue'], resolve)
        }
    ],
    scrollBehavior: (to, from, savedPosition) => {
        console.log("scroll to:", to)
        if (to.path === '/vmodel') {
            return { y: 1000 }
        }
        return {
            y: 0
        }
    }
})
