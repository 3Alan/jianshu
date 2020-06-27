import React, { Component } from 'react';
import Loadable from 'react-loadable';

const LoadableComponent = Loadable({
  // 需要异步引入的组件
  loader: () => import('./index'),
  loading() {
    // 加载时进行的操作，这里显示loading提升用户体验
    return <div>loading...</div>;
  },
});

export default class App extends Component {
  render() {
    return <LoadableComponent />;
  }
}
