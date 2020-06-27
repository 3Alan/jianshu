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
import {
  serachBlur,
  serachFocus,
  getHotList,
  hotMouseEnter,
  hotMouseLeave,
  refreshHotList,
} from './store/actionCreators';
import { logout } from '../../pages/login/store/actionCreators';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
  showHotList(focused) {
    const {
      hotList,
      hotListPage,
      hotListTotalPage,
      handlerMouseEnter,
      handlerMouseLeave,
      hotMouseIn,
      refreshHotList,
    } = this.props;
    // 先将immutable数据转化成js数据
    const newList = hotList.toJS();
    const List = [];
    for (let i = (hotListPage - 1) * 4; i < hotListPage * 4; i++) {
      if (newList[i]) {
        List.push(
          <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
        );
      }
    }
    if (focused || hotMouseIn) {
      return (
        <SearchInfo
          onMouseEnter={handlerMouseEnter}
          onMouseLeave={handlerMouseLeave}
        >
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch
              onClick={() =>
                refreshHotList(hotListPage, hotListTotalPage, this.spinIcon)
              }
            >
              <span
                ref={(element) => (this.spinIcon = element)}
                className="iconfont spin"
              >
                &#xe851;
              </span>
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>{List}</SearchInfoList>
        </SearchInfo>
      );
    } else {
      return;
    }
  }
  render() {
    const {
      focused,
      handleInputFocus,
      handleInputBlur,
      hotList,
      login,
      logout,
    } = this.props;
    return (
      <HeaderWrapper>
        <Link to="/">
          <Logo />
        </Link>
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载APP</NavItem>
          {login ? (
            <NavItem className="right" onClick={logout}>
              退出
            </NavItem>
          ) : (
            <Link to="/login">
              <NavItem className="right">登录</NavItem>
            </Link>
          )}
          <NavItem className="right">
            <span className="iconfont">&#xe636;</span>
          </NavItem>
          <SearchWrapper>
            <CSSTransition in={focused} timeout={200} classNames="slide">
              <NavSearch
                className={focused ? 'focused' : ''}
                onFocus={() => handleInputFocus(hotList)}
                onBlur={handleInputBlur}
              />
            </CSSTransition>
            <span
              className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}
            >
              &#xe617;
            </span>
            {this.showHotList(focused)}
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className="reg">注册</Button>
          <Link to="/write">
            <Button className="writting">
              <span className="iconfont">&#xe615;</span>写文章
            </Button>
          </Link>
        </Addition>
      </HeaderWrapper>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    // 两种写法等同
    // focused: state.get('header').get('focused'),
    focused: state.getIn(['header', 'focused']),
    hotList: state.getIn(['header', 'hotList']),
    hotListPage: state.getIn(['header', 'hotListPage']),
    hotListTotalPage: state.getIn(['header', 'hotListTotalPage']),
    hotMouseIn: state.getIn(['header', 'hotMouseIn']),
    login: state.getIn(['login', 'login']),
  };
};
const mapDispathToProps = (dispatch) => {
  return {
    handleInputFocus(list) {
      list.size === 0 && dispatch(getHotList());
      dispatch(serachFocus());
    },
    handleInputBlur() {
      const action = serachBlur();
      dispatch(action);
    },
    handlerMouseEnter() {
      const action = hotMouseEnter();
      dispatch(action);
    },
    handlerMouseLeave() {
      const action = hotMouseLeave();
      dispatch(action);
    },
    logout() {
      dispatch(logout());
    },
    refreshHotList(page, totalPage, spin) {
      // 处理旋转动画
      let angle = spin.style.transform.replace(/[^0-9]/gi, '');
      if (angle) {
        angle = parseInt(angle, 10);
      } else {
        angle = 0;
      }
      spin.style.transform = `rotate(${angle + 360}deg)`;
      if (page < totalPage) {
        dispatch(refreshHotList(page + 1));
      } else {
        dispatch(refreshHotList(1));
      }
    },
  };
};
export default connect(mapStateToProps, mapDispathToProps)(Header);
