import {
  SEARCH_BLUR,
  SEARCH_FOCUS,
  CHANGE_HOT_LIST,
  HOT_MOUSE_ENTER,
  HOT_MOUSE_LEAVE,
  REFRESH_HOT_LIST,
} from './actionTypes';
import { fromJS } from 'immutable';

// 通过fromJS将js对象转化成immutable对象
const defaultState = fromJS({
  focused: false,
  hotMouseIn: false,
  hotList: [],
  hotListPage: 1,
  hotListTotalPage: 1,
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case SEARCH_FOCUS:
      // state.set()返回的新的值，并不会改变state的值
      return state.set('focused', true);
    case SEARCH_BLUR:
      return state.set('focused', false);
    case CHANGE_HOT_LIST:
      return state.merge({
        hotList: action.data,
        hotListTotalPage: action.hotListTotalPage,
      });
    case HOT_MOUSE_ENTER:
      return state.set('hotMouseIn', true);
    case HOT_MOUSE_LEAVE:
      return state.set('hotMouseIn', false);
    case REFRESH_HOT_LIST:
      return state.set('hotListPage', action.page);
    default:
      return state;
  }
};
