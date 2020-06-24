import React, { Component } from 'react';
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem,
  SearchInfoList,
} from './style';
import { serachBlur, serachFocus, getHotList } from './store/actionCreators';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <Logo />
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载APP</NavItem>
          <NavItem className="right">登录</NavItem>
          <NavItem className="right">
            <span className="iconfont">&#xe636;</span>
          </NavItem>
          <SearchWrapper>
            <CSSTransition
              in={this.props.focused}
              timeout={200}
              classNames="slide"
            >
              <NavSearch
                className={this.props.focused ? 'focused' : ''}
                onFocus={this.props.handleInputFocus}
                onBlur={this.props.handleInputBlur}
              />
            </CSSTransition>
            <span
              className={
                this.props.focused ? 'focused iconfont zoom' : 'iconfont zoom'
              }
            >
              &#xe617;
            </span>
            {this.getListArea(this.props.focused)}
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className="reg">注册</Button>

          <Button className="writting">
            <span className="iconfont">&#xe615;</span>写文章
          </Button>
        </Addition>
      </HeaderWrapper>
    );
  }
  getListArea(show) {
    if (show) {
      return (
        <SearchInfo>
          <SearchInfoTitle>
            热门搜索<SearchInfoSwitch>换一批</SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {this.props.hotList.map((item) => {
              return <SearchInfoItem key={item}>{item}</SearchInfoItem>;
            })}
          </SearchInfoList>
        </SearchInfo>
      );
    } else {
      return;
    }
  }
}
const mapStateToProps = (state) => {
  return {
    // 两种写法等同
    // focused: state.get('header').get('focused'),
    focused: state.getIn(['header', 'focused']),
    hotList: state.getIn(['header', 'hotList']),
  };
};
const mapDispathToProps = (dispatch) => {
  return {
    handleInputFocus() {
      dispatch(getHotList());
      dispatch(serachFocus());
    },
    handleInputBlur() {
      const action = serachBlur();
      dispatch(action);
    },
  };
};
export default connect(mapStateToProps, mapDispathToProps)(Header);
