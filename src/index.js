import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import * as serviceWorker from './serviceWorker';

import { ThemeProvider } from '@material-ui/styles';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import theme from './theme';

import validate from 'validate.js';
import validators from './common/validators';

import './styles/styles.scss';

import 'dotenv/config';


validate.validators = {
    ...validate.validators,
    ...validators
  };


const store = configureStore();

const AppWithRoutes = () => (
    <Provider store={store}>
        <ThemeProvider theme={theme} >
            <AppRouter   />
        </ThemeProvider>
    </Provider>

)

ReactDOM.render(<AppWithRoutes />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
