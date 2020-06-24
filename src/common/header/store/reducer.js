import { SEARCH_BLUR, SEARCH_FOCUS, CHANGE_HOT_LIST } from './actionTypes';
import { fromJS } from 'immutable';

// 通过fromJS将js对象转化成immutable对象
const defaultState = fromJS({
  focused: false,
  hotList: [],
});

export default (state = defaultState, action) => {
  if (action.type === SEARCH_FOCUS) {
    // state.set()返回的新的值，并不会改变state的值
    return state.set('focused', true);
  }
  if (action.type === SEARCH_BLUR) {
    return state.set('focused', false);
  }
  if (action.type === CHANGE_HOT_LIST) {
    return state.set('hotList', action.data);
  }
  return state;
};
