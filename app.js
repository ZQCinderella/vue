import Vue from 'vue'
import Vuex from 'vuex'
import router from './router/index.js'
import store from './store/index.js'
import 'babel-polyfill'
import App from '@/components/app.vue'

// 全局定义指令
Vue.directive('focus', {
  inserted: function (el) {
    console.log('el focus')
    el.focus()
  }
})

console.log('--------', router)

const inst = new Vue({
  // el: '#app',
  store,
  testProp: {name: 'fet'},   // 所有写在vue构造函数里的内容，都会被放到$options中
  render: h => h(App),
  router
}).$mount('#app')
console.log('config', inst.$options.testProp)
// 通过visibilityChange事件，控制页面内的内容播放和暂停


