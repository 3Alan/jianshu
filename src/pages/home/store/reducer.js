import { fromJS } from 'immutable';
import { GET_HOME_DATA, MORE_ARTICLE, TOGGLE_TOP } from './actionTypes';

// 通过fromJS将js对象转化成immutable对象
const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  articlePage: 1,
  showScroll: false,
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case GET_HOME_DATA:
      return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList),
      });
    case MORE_ARTICLE:
      return state.merge({
        articleList: state.get('articleList').concat(action.articleList),
        articlePage: action.articlePage,
      });
    case TOGGLE_TOP:
      return state.set('showScroll', action.show);
    default:
      return state;
  }
};
