import axios from 'axios';
import { fromJS } from 'immutable';
import {
  SEARCH_BLUR,
  SEARCH_FOCUS,
  CHANGE_HOT_LIST,
  HOT_MOUSE_ENTER,
  HOT_MOUSE_LEAVE,
  REFRESH_HOT_LIST,
} from './actionTypes';

const changeHotList = (data) => ({
  type: CHANGE_HOT_LIST,
  // 确保和reducer中的数据保持一致，要将data转化为immutable类型
  data: fromJS(data),
  hotListTotalPage: Math.ceil(data.length / 4),
});

export const serachFocus = () => ({
  type: SEARCH_FOCUS,
});

export const serachBlur = () => ({
  type: SEARCH_BLUR,
});

export const getHotList = () => {
  return (disptach) => {
    axios
      .get('/api/headerList.json')
      .then((res) => {
        disptach(changeHotList(res.data.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const hotMouseEnter = () => ({
  type: HOT_MOUSE_ENTER,
});

export const hotMouseLeave = () => ({
  type: HOT_MOUSE_LEAVE,
});

export const refreshHotList = (page) => ({
  type: REFRESH_HOT_LIST,
  page,
});
