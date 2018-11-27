import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const state = {
  count: 0
}
const mutations = {
  increment (state, val) {
    state.count += val
  },
  decrement (state, val) {
    state.count -= val
  }
}
const actions = {
  incre (ctx, val) {
    ctx.commit('increment', val)
  },
  decre (ctx, val) {
    ctx.commit('decrement', val)
  }
}
const getters = {
  count (state) {
    return state.count
  }
}
export default new Vuex.Store({
  actions,
  mutations,
  getters,
  state
})
