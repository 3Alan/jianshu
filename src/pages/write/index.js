import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Write extends Component {
  render() {
    if (this.props.isLogin) {
      return <div>writing</div>;
    } else {
      return <Redirect to="/login"></Redirect>;
    }
  }
}
const mapStateToProps = (state) => ({
  isLogin: state.getIn(['login', 'login']),
});

export default connect(mapStateToProps)(Write);
