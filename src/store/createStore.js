import { applyMiddleware, compose, createStore } from 'redux'
// compose 可以將 function 由右到左合併並回傳一個 Function
// Redux 中 Middleware 則是扮演 action 到達 reducer 前的第三方擴充。而 applyMiddleware 可以將多個 middlewares 整合並回傳一個 Function，便於使用。
import thunk from 'redux-thunk'
// 发送Async的action
import createLogger from 'redux-logger';
// Logger for Redux,必须放在所有中间件之后
import { browserHistory } from 'react-router'
// 適用於伺服器端渲染，但需要設定伺服器端避免處理錯誤
import { apiMiddleware } from 'redux-api-middleware';
// 自动生成标准的RSAAs然后发送FSAs
import makeRootReducer from './reducers'
import { updateLocation } from './location'

export default (initialState = {}) => {
  // ======================================================
  // Middleware Configuration
  // ======================================================
  const logger = createLogger()
  const middleware = [thunk, apiMiddleware, logger]

  // ======================================================
  // Store Enhancers 第三個參數通常會放入我們想要使用用來增強 Redux 功能
  // ======================================================
  const enhancers = []
  if (__DEV__) {
    const __REDUX_DEVTOOLS_EXTENSION_COMPOSE__ = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    if(typeof __REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === 'function'){
       enhancers.push(__REDUX_DEVTOOLS_EXTENSION_COMPOSE__())
    }
  }

  // ======================================================
  // Store Instantiation and HMR Setup
  // 接受一个Reducer函数,initialState,compose从右至左整合中间件和插件
  // 同时返回了4个公共方法API:dispatch|getState|subscribe|replaceReducer
  // ======================================================
  const store = createStore(
    makeRootReducer(),
    initialState,
    compose(
      applyMiddleware(...middleware),
      ...enhancers
    )
  )
  // reducers在这里声明
  store.asyncReducers = {}

  // 给store添加一个取消订阅的方法
  // To unsubscribe, invoke `store.unsubscribeHistory()` anytime 取消订阅 唤醒store
  store.unsubscribeHistory = browserHistory.listen(updateLocation(store)) // location change

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      const reducers = require('./reducers').default
      // 至于replaceReducer方法,就是动态替换reducer函数,
      store.replaceReducer(reducers(store.asyncReducers))
    })
  }

  return store
}
