// Reducer
export default function counter(state = { count: 0 }, action) {
  const count = state.count
  switch (action.type) {
    case 'INCREASE_COUNTER':
      return { count: count + 1 }
    case 'RESET_COUNTER':
      return { count: 0 }
    case 'GET_CONTER': 
      return {count: count}
    default:
      return state
  }
}