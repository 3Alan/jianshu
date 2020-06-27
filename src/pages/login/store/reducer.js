import { fromJS } from 'immutable';
import { LOGIN, LOGOUT } from './actionTypes';

// 通过fromJS将js对象转化成immutable对象
const defaultState = fromJS({
  login: false,
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN:
      return state.set('login', true);
    case LOGOUT:
      return state.set('login', false);
    default:
      return state;
  }
};
