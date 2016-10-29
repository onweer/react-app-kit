import { CALL_API } from 'redux-api-middleware';
// ------------------------------------
// Constants
// ------------------------------------
export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAIL = 'LOGIN_FAIL'

// ------------------------------------
// Actions
// ------------------------------------

// store JWT to LocalStorage
export function restoreSessionFromLocalStorage() {
  return {
    type: LOGIN_SUCCESS,
    payload: JSON.parse(localStorage.getItem('session')),
  };
}

export function login(data) {
  // console.log(data); 表单的值
  return async(dispatch, getState) => {
    const action = await dispatch({
      [CALL_API]: {
        endpoint: 'http://localhost:9527/api/v1/sessions',
        method: 'POST',
        body: JSON.stringify(data),
        types: [LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL],
      },
    });

    if (action.type === LOGIN_SUCCESS) {
       // 存储JWT,并登录成功跳转到首页.
      localStorage.setItem('session', JSON.stringify(action.payload));
    }
    return action;
  }
}


// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [LOGIN_REQUEST]: (state) => {
    return ({...state, fetching: true}) // 加上fetching状态
  },
  [LOGIN_SUCCESS]: (state, action) => {
    return ({...state, fetching: false, ...action.payload, error: null }) // 结束fetching状态,返回接收到的data
  },
  [LOGIN_FAIL]: (state, action) => {
    return ({...state, fetching: false, error: action.payload.response.message }) // payload对象有message,name,response对象,status
  },
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  fetching: false,
  auth: false,
}
export default function LoginReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state // default return state
}
