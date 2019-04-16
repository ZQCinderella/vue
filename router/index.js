import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const router = new VueRouter({
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
                hash: 'test',
                prev: '',
                level: '',
                head:false,
                footer: false,
                keepAlive: true,
                scrollToTop: true
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
    // 该方法可以制定路由跳转的时候，页面所处的位置。savedPosition只有在 popstate导航（通过） vue-router以后可能不再支持次特性，使用beforeEach代替
    // scrollBehavior: (to, from, savedPosition) => {
    //     if (savedPosition) {
    //         return savedPosition
    //     } else {
    //         if (to.path === '/vmodel') {
    //             return { y: 1000 }
    //         }
    //         return {
    //             y: 0
    //         }
    //     }
    // }
    // 异步滚动
    // scrollBehavior:(to, from, savedPosition) => {
    //     console.log("scroll to:", to)
    //     return new Promise((resolve, reject) => {
    //         if (to.path === '/vmodel') {
    //             // 利用路由元信息实现更加粒度化的滚动
    //             if (to.hash) {
    //                 console.log('hash: ', to.hash)
    //                 resolve({
    //                     selector: to.hash
    //                 })
    //             }
    //             if (to.matched.map(m => m.meta.scrollToTop)) {
    //                 resolve({
    //                     x: 0,
    //                     y: 0
    //                 })
    //             } else {
    //                 setTimeout(() => {
    //                     resolve({ y: 1000 })
    //                 }, 500)
    //             }
    //         }
    //     })
    // }
})
router.beforeEach((to, from, next) => {
    // document.body.scrollTo = 0
    next()
})
export default router