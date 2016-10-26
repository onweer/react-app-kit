import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path: 'login',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Login = require('./containers/LoginContainer').default
      const reducer = require('./modules/login').default
      injectReducer(store, { key: 'login', reducer }) // 这个key和components里面拿到的key是同一个key
      cb(null, Login)
    })
  }
})
