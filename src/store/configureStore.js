import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import organisationReducer from '../reducers/organisations';
import filtersReducer from '../reducers/filters';
import authReducer from '../reducers/auth';
import projectsReducer from '../reducers/projects';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      organisations: organisationReducer,
      filters: filtersReducer,
      auth: authReducer,
      projects: projectsReducer,
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
