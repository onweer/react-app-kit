import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actions } from './../modules/login'

// 导入UI组件
import Login from '../components/Login'

// 定义State映射到Props,负责输入逻辑，即将state映射到 UI 组件的参数,
// 执行后应该返回一个对象 里面的每一个键值对就是一个映射
// mapStateToProps是一个函数，返回值表示的是需要merge进props的state
const mapStateToProps = state => ({
  login: state.login
})

// 定义Dispatch映射到Props,负责输出逻辑，即将用户对 UI 组件的操作映射成 Action。
// 这里的actionCreator应该是已经被包装了dispatch了的，推荐使用redux的bindActionCreators函数。
const mapDispatchtoProps = (dispatch) => ({
  actions: bindActionCreators({ ...actions }, dispatch),
})
// 通过connect生成容器组件
export default connect(mapStateToProps, mapDispatchtoProps)(Login)
