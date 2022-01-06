import { createStore, combineReducers } from 'redux'

function userReducer(state = null, action) {
  switch (action.type) {
    case 'user/set':
      return action.user
    default:
      return state
  }
}

export default createStore(combineReducers({
  user: userReducer
}))
