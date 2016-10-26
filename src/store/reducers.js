import { combineReducers } from 'redux'
import locationReducer from './location'

export const makeRootReducer = (asyncReducers) => {
  // 有多個reducers combine(使用 combineReducers)
  // 在一起的 rootReducers 将所有reducer打包成一个reducer
  return combineReducers({
    location: locationReducer,
    ...asyncReducers,
  })
}
// 全局的reducer在这里注册,然后在createStore中保存
export const injectReducer = (store, { key, reducer }) => {
  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
