import React, { Component, PropTypes } from 'react'
import { browserHistory, Router } from 'react-router'
import { Provider } from 'react-redux'

class AppContainer extends Component {
  static propTypes = {
    routes : PropTypes.array.isRequired,
    store  : PropTypes.object.isRequired
  }
  // 组件在决定重新渲染调用该函数,提升React性能
  shouldComponentUpdate() {
    return false
  }

  render() {
    // main.js 传递过来的routes,store
    const { routes, store } = this.props

    return (
      // Provider包起來將 store 傳遞下去
      // 這邊使用 browserHistory 當做 history 有三种:browserHistory, hashHistory, createMemoryHistory
      // children 路由是可以嵌套的，如果子路由的路径被匹配，那么父路由也处于激活状态。
      <Provider store={store} key="provider">
          <Router history={browserHistory} children={routes} />
      </Provider>
    )
  }
}

export default AppContainer
