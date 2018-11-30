// action不能直接修改state, 必须通过mutations
const increment = (ctx) => {
  ctx.commit('increment')
}
const decrement = (ctx) => {
  ctx.commit('decrement')
}
const addIfOdd = (ctx) => {
  if ((ctx.state.count +1) % 2 === 0) {
    ctx.commit('increment')
  }
}
const incrementAsync = ({ commit }) => {
  setTimeout(() => {
    commit('increment')
  }, 1000)
}

export {
  increment,
  decrement,
  addIfOdd,
  incrementAsync
}