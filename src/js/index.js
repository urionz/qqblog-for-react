import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import {Router, Route, IndexRoute, useRouterHistory} from 'react-router';
import {createHashHistory} from 'history';
import Nav from './components/nav';
import HeaderContainer from './containers/header';
import '../style/style.css';
import '../style/b.css';
import Main from './components/main';
import Content from './components/content';

let store = configureStore();
const appHistory = useRouterHistory(createHashHistory)({queryKey: false});

const routes = (
    <Route path="/" component={Main}>
        <IndexRoute component={Content} />
    </Route>
);


ReactDOM.render(
    <Provider store={store}>
        <Router history={appHistory} routes={routes} />
    </Provider>,
    document.getElementById('root')
);
