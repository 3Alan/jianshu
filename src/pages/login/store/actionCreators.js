import axios from 'axios';
import { LOGIN, LOGOUT } from './actionTypes';

const login = (success) => ({
  type: LOGIN,
  value: success,
});
export const logout = (success) => ({
  type: LOGOUT,
  value: false,
});

export const checkLogin = (username, pwd) => {
  return (dispatch) => {
    axios
      .get(`/api/login.json?username=${username}&pwd=${pwd}`)
      .then((res) => {
        dispatch(login(res.data.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
