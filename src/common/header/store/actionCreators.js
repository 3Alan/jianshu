import axios from 'axios';
import { fromJS } from 'immutable';
import { SEARCH_BLUR, SEARCH_FOCUS, CHANGE_HOT_LIST } from './actionTypes';

export const serachFocus = () => ({
  type: SEARCH_FOCUS,
});

export const serachBlur = () => ({
  type: SEARCH_BLUR,
});

export const changeHotList = (data) => ({
  type: CHANGE_HOT_LIST,
  // 确保和reducer中的数据保持一致，要将data转化为immutable类型
  data: fromJS(data),
});

export const getHotList = () => {
  return (disptach) => {
    axios
      .get('api/headerList.json')
      .then((res) => {
        disptach(changeHotList(res.data.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
