import { createStore, combineReducers } from 'redux'

import counterReducer from '../Reducers/counter.js'
import loadingReducer from '../Reducers/global-loading.js'
// Store(多个reducer时候使用combineReducer方法)

var totalReducer = combineReducers({counterReducer, loadingReducer})
const store = createStore(totalReducer)

export default store