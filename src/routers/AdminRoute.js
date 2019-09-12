import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';


export const AdminRoute = ({
  isAuthenticated,
  component: Component,
  role,
  ...rest
}) => (
    <Route {...rest} component={(props) => (
      isAuthenticated && role==='ADMIN' ? (
        <div>
          <Component {...props} />
        </div>
      ) : (
          <Redirect to="/" />
        )
    )} />
  );

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.userid,
  role: state.auth.role,
});

export default connect(mapStateToProps)(AdminRoute);
