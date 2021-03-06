import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const SecureRoute = ({ component: Component, security, ...otherProps }) => (
  <Route
    {...otherProps}
    render={props =>
      ((localStorage.getItem("token")!==null)) ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);


const mapStateToProps = state => ({
  security: state.securityReducer
});

export default connect(mapStateToProps)(SecureRoute);
