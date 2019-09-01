import React,{useEffect}  from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import * as serviceWorker from './serviceWorker';

import { ThemeProvider } from '@material-ui/styles';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import theme from './theme';

import validate from 'validate.js';
import validators from './common/validators';

import './styles/styles.scss';

import 'dotenv/config';

//import { connect } from 'react-redux';
import {login, logout} from './actions/auth';
import LoadingPage from './views/auth/LoadingPage'

validate.validators = {
    ...validate.validators,
    ...validators
  };


const store = configureStore();



const AppWithRoutes = ()=>{

    return (
        <Provider store={store}>
            <ThemeProvider theme={theme} >
                <AppRouter   />
            </ThemeProvider>
        </Provider>
    
    )
} 
    
    
let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(<AppWithRoutes />, document.getElementById('root'));
    hasRendered = true;
  }
};


ReactDOM.render(<LoadingPage />, document.getElementById('root'));

        let user = localStorage.getItem('user')
        if(user){
            store.dispatch(login( JSON.parse(user) ))
            renderApp()
        }else{
            store.dispatch(logout())
            renderApp()
        }

  // If you want your app to work offline and load faster, you can change
  // unregister() to register() below. Note this comes with some pitfalls.
  // Learn more about service workers: https://bit.ly/CRA-PWA
  serviceWorker.unregister();


//edge case -  we currently dont have a way to check if token still valid on page reload




        // const mapDispatchToProps = (dispatch,state) => ({
        //     login: (loginObj) => dispatch(login(loginObj))
        //   });
        
        //   const mapStateToProps = (state) => ({
        //     auth: state.auth
        //   });

        //export default connect(mapStateToProps, mapDispatchToProps)(AppWithRoutes);

        //Get from local storage the logged in user if exists