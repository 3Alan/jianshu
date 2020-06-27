import React, { Component } from 'react';
import { RecommendWrapper, RecommendItem } from '../style';
import { connect } from 'react-redux';

class Recommend extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <RecommendWrapper>
        {this.props.recommendList.map((item) => (
          <RecommendItem
            key={item.get('id')}
            imgUrl={item.get('imgUrl')}
          ></RecommendItem>
        ))}
      </RecommendWrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  recommendList: state.getIn(['home', 'recommendList']),
});

export default connect(mapStateToProps)(Recommend);
