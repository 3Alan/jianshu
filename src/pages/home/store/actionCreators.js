import axios from 'axios';
import { fromJS } from 'immutable';
import { GET_HOME_DATA, MORE_ARTICLE, TOGGLE_TOP } from './actionTypes';

const HomeInfo = ({ topicList, articleList, recommendList }) => ({
  type: GET_HOME_DATA,
  topicList,
  articleList,
  recommendList,
});
const moreArticle = (articleList, articlePage) => ({
  type: MORE_ARTICLE,
  articleList,
  articlePage,
});

export const getHomeData = () => {
  return (dispatch) => {
    axios
      .get('/api/home.json')
      .then((res) => {
        dispatch(HomeInfo(res.data.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const getMoreArticle = (articlePage) => {
  return (dispatch) => {
    axios
      .get(`/api/articleList.json?page=${articlePage}`)
      .then((res) => {
        dispatch(moreArticle(fromJS(res.data.data), articlePage + 1));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const toggleTop = (show) => ({
  type: TOGGLE_TOP,
  show,
});
