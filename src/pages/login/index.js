import React, { Component } from 'react';
import { LoginWrapper, LoginBox, Input, Button } from './style';
import { connect } from 'react-redux';
import { checkLogin } from './store/actionCreators';
import { Redirect } from 'react-router-dom';

class Login extends Component {
  render() {
    if (!this.props.isLogin) {
      return (
        <LoginWrapper>
          <LoginBox>
            <Input
              placeholder="账号"
              ref={(username) => {
                this.username = username;
              }}
            />
            <Input
              placeholder="密码"
              type="password"
              ref={(pwd) => {
                this.pwd = pwd;
              }}
            />
            <Button onClick={() => this.props.login(this.username, this.pwd)}>
              登录
            </Button>
          </LoginBox>
        </LoginWrapper>
      );
    } else {
      return <Redirect to="/"></Redirect>;
    }
  }
}
const mapStateToProps = (state) => ({
  isLogin: state.getIn(['login', 'login']),
});

const mapDispathToProps = (dispatch) => {
  return {
    login(username, pwd) {
      dispatch(checkLogin(username.value, pwd.value));
    },
  };
};

export default connect(mapStateToProps, mapDispathToProps)(Login);
