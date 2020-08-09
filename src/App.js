import React from 'react';
import Header from './common/header';
import store from './store';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './pages/home';
import Detail from './pages/detail/loadable';
import Login from './pages/login';
import Write from './pages/write';
import Father from './testDemo/Father';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Route path="/" exact component={Home}></Route>
        <Route path="/login" exact component={Login}></Route>
        <Route path="/write" exact component={Write}></Route>
        <Route path="/detail/:id" exact component={Detail}></Route>
        <Route path="/demo" exact component={Father}></Route>
      </Router>
    </Provider>
  );
}

export default App;
