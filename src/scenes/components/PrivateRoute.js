import React from "react";
import AuthContext from "../../context/authContext/authContext";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { userAuth, loading } = React.useContext(AuthContext);

  console.log(userAuth);
  return (
    <Route
      {...rest}
      render={(props) =>
        !userAuth && !loading ? (
          <Redirect to="/login" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PrivateRoute;
