export const increment = (state) => {
  state.count++
  state.history.push('add')
}
export const decrement = (state) => {
  state.count--
  state.history.push('dec')
}