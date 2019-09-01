import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import createHistory from 'history/createBrowserHistory';

import Home from '../views/home'
import Profile from '../views/profile'
import Login from '../views/auth/login'
import Register from '../views/auth/register'
import NotFoundPage from '../views/auth/notFound';
import AdminDashboard from '../views/admin-dashboard'

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
    <div>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/orgProfile:orgName" exact component={Profile} />
            <Route path="/myProfile:id" exact component={Profile} />
            <Route path="/sign-in" exact component={Login} />
            <Route path="/sign-up" exact component={Register} />
            <Route path="/admin" exact component={AdminDashboard} />
            <Route component={NotFoundPage} />
        </Switch>
    </div>
    </Router>
);

export default AppRouter;
