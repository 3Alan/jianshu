import React, { Component } from 'react';
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from './style';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import { connect } from 'react-redux';
import { getHomeData, toggleTop } from './store/actionCreators';
import { Button } from '@3alan/ui';
import '@3alan/ui/dist/index.css';

class Home extends Component {
  componentDidMount() {
    this.props.getHomeData();
    this.bindScrollEvent();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.listenScroll);
  }
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img
            className="banner-img"
            src="http://upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
            alt="bannerImg"
          ></img>
          <Topic />
          <Button type="primary">123</Button>
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Writer />
        </HomeRight>
        {this.props.showScroll ? <BackTop onClick={this.scrollToTop}>Top</BackTop> : ''}
      </HomeWrapper>
    );
  }
  scrollToTop() {
    window.scrollTo(0, 0);
  }
  bindScrollEvent() {
    window.addEventListener('scroll', this.props.listenScroll);
  }
}
const mapDispathToProps = dispatch => {
  return {
    getHomeData() {
      dispatch(getHomeData());
    },
    listenScroll() {
      if (document.documentElement.scrollTop > 100) {
        dispatch(toggleTop(true));
      } else {
        dispatch(toggleTop(false));
      }
    }
  };
};

const mapStateToProps = state => ({
  showScroll: state.getIn(['home', 'showScroll'])
});

export default connect(mapStateToProps, mapDispathToProps)(Home);
