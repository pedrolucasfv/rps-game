import { createStore, combineReducers } from 'redux'
import DefaultReducer from './Default/Default.reducer'
const rootReducer = combineReducers({
  default: DefaultReducer
})

const store = createStore(rootReducer)

export default store

export type RootState = ReturnType<typeof rootReducer>
