import React from "react";
import AuthContext from "../../context/authContext/authContext";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const authContext = React.useContext(AuthContext);
  const { userAuth } = authContext;

  return (
    <Route
      {...rest}
      render={(props) =>
        !userAuth ? <Redirect to="/login" /> : <Component {...props} />
      }
    />
  );
};

export default PrivateRoute;
