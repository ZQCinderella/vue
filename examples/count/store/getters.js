
export const evenOrOdd = (state) => state.count % 2 === 0 ? 'even' : 'odd'

const historyLimit = 6;

export const recentHistory = (state) => {
  const len = state.history.length;
  const begin = len - historyLimit < 0 ? 0 : len - historyLimit
  return state.history.slice(begin, len).join(',')
}