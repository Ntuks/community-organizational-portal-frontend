import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ReactiveBase } from '@appbaseio/reactivesearch';
import './styles/styles.scss';

import Home from './views/home'

import Profile from './views/profile'

const AppWithRoutes = () => (
    <Router>
        <Route path="/" exact component={Home} />
        <Route path="/orgProfile" exact component={Profile} />
    </Router>
)

ReactDOM.render(<AppWithRoutes />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
