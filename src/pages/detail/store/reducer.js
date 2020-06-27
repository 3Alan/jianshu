import { fromJS } from 'immutable';
import { GET_DETAIL_INFO } from './actionTypes';

// 通过fromJS将js对象转化成immutable对象
const defaultState = fromJS({
  title: '',
  content: '',
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case GET_DETAIL_INFO:
      return state.merge({
        title: action.title,
        content: action.content,
      });
    default:
      return state;
  }
};
