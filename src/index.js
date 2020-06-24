import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// 全局样式文件
import { GlobalStyle } from './style';
import { FontCss } from './static/iconfont/iconfont';

ReactDOM.render(
  <>
    <App />
    <GlobalStyle />
    <FontCss />
  </>,
  document.getElementById('root')
);
