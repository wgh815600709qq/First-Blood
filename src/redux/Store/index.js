import { createStore } from 'redux'

import counterReducer from '../Reducers/counter.js'
// Store(多个reducer时候使用combineReducer方法)
const store = createStore(counterReducer)

export default store