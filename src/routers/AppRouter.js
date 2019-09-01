import React,{useEffect} from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import createHistory from 'history/createBrowserHistory';

import Home from '../views/home'
import Profile from '../views/profile'
import Login from '../views/auth/login'
import Register from '../views/auth/register'
import NotFoundPage from '../views/auth/notFound';
import AdminDashboard from '../views/admin-dashboard'
import {login} from '../actions/auth';

export const history = createHistory();



const AppRouter = ({auth, login}) => {

    useEffect(()=>{
        console.log("mounted")
        //Get from local storage the logged in user if exists
        let user = localStorage.getItem('user')
        if(user){
            login( JSON.parse(user) )
        }
    },[])

    useEffect(()=>{
        console.log(auth)
    },[auth])

    return(
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
}
const mapDispatchToProps = (dispatch,state) => ({
    login: (loginObj) => dispatch(login(loginObj))
  });
  
  const mapStateToProps = (state) => ({
    auth: state.auth
  });
export default connect(mapStateToProps, mapDispatchToProps)(AppRouter);
  


//edge case -  we currently dont have a way to check if token still valid on page reload