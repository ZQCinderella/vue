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

new Vue({
  // el: '#app',
  store,
  render: h => h(App),
  router
}).$mount('#app')
console.log('config', Vue.config)
// 通过visibilityChange事件，控制页面内的内容播放和暂停


