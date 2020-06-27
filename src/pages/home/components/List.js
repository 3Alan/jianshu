import React, { Component } from 'react';
import { ListItem, ListInfo, LoadMore } from '../style';
import { connect } from 'react-redux';
import { getMoreArticle } from '../store/actionCreators';
import { Link } from 'react-router-dom';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { articleList, getMoreArticle, articlePage } = this.props;
    return (
      <>
        {articleList.map((item, index) => (
          <Link to={`/detail/${item.get('id')}`} key={index}>
            <ListItem>
              <img
                className="pic"
                src={item.get('imgUrl')}
                alt="articleImg"
              ></img>
              <ListInfo>
                <h3 className="title">{item.get('title')}</h3>
                <p className="desc">{item.get('desc')}</p>
              </ListInfo>
            </ListItem>
          </Link>
        ))}
        <LoadMore onClick={() => getMoreArticle(articlePage)}>
          获取更多
        </LoadMore>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  articleList: state.getIn(['home', 'articleList']),
  articlePage: state.getIn(['home', 'articlePage']),
});

const mapDispathToProps = (dispatch) => {
  return {
    getMoreArticle(articlePage) {
      dispatch(getMoreArticle(articlePage));
    },
  };
};

export default connect(mapStateToProps, mapDispathToProps)(List);
