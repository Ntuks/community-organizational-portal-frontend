import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ReactiveBase } from '@appbaseio/reactivesearch';


import Home from './views/home'

const AppWithRoutes = () => (
    <ReactiveBase
        app="earthquake"
        credentials="X8RsOu0Lp:9b4fe1a4-58c6-4089-a042-505d86d9da30"
        type="listing"
    >
        <Router>
            <Route path="/" exact component={Home} />
        </Router>
    </ReactiveBase>
)

ReactDOM.render(<AppWithRoutes />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
