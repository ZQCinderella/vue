import Vue from 'vue'
import store from './store'
import App from './count.vue'

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})