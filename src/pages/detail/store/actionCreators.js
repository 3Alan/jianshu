import axios from 'axios';
import { GET_DETAIL_INFO } from './actionTypes';

const DetailInfo = ({ title, content }) => ({
  type: GET_DETAIL_INFO,
  title,
  content,
});

export const getDetail = (id) => {
  return (dispatch) => {
    axios
      .get(`/api/detail.json?id=${id}`)
      .then((res) => {
        dispatch(DetailInfo(res.data.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
