import React, { Component } from 'react';
import { DetailWrapper, Header, Content } from './style';
import { connect } from 'react-redux';
import { getDetail } from './store/actionCreators';
import { withRouter } from 'react-router-dom';

class Detail extends Component {
  render() {
    return (
      <DetailWrapper>
        <Header>{this.props.title}</Header>
        <Content dangerouslySetInnerHTML={{ __html: this.props.content }} />
      </DetailWrapper>
    );
  }
  componentDidMount() {
    this.props.getDetail(this.props.match.params.id);
  }
}

const mapStateToProps = (state) => ({
  title: state.getIn(['detail', 'title']),
  content: state.getIn(['detail', 'content']),
});

const mapDispathToProps = (dispatch) => {
  return {
    getDetail(id) {
      dispatch(getDetail(id));
    },
  };
};

export default connect(mapStateToProps, mapDispathToProps)(withRouter(Detail));
