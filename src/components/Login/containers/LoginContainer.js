import { connect } from 'react-redux'
import { login } from './../modules/login'
// 导入UI组件
import Login from '../components/Login'

// 定义State映射到Props,负责输入逻辑，即将state映射到 UI 组件的参数,
// 执行后应该返回一个对象 里面的每一个键值对就是一个映射
const mapStateToProps = state => ({
  ...state.login
}) // orderList代表UI组件的同名参数)

// 定义Dispatch映射到Props,负责输出逻辑，即将用户对 UI 组件的操作映射成 Action。
const mapDispatchtoProps = {
  login,
}
// 通过connect生成容器组件
export default connect(mapStateToProps, mapDispatchtoProps)(Login)
