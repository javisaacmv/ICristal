import React from "react";
import AuthContext from "./authContext";
import AuthReducer from "./authReducer";
import axios from "axios";
import envConfig from "../../config";
import setToken from "../../utils/setToken";

const AuthState = (props) => {
  const initialState = {
    userAuth: null,
    errors: null,
    user: null,
    loading: true,
  };

  const [state, dispatch] = React.useReducer(AuthReducer, initialState);

  //register
  const registerUser = async (userData) => {
    const url = envConfig();
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post(url + "/register", userData, config);
      dispatch({
        type: "success_register",
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: "fail_register",
        payload: err.response.data.error[0].msg,
      });
    }
  };

  const getUser = async () => {
    if (localStorage.token) {
      setToken(localStorage.token);
    }

    const url = envConfig();

    try {
      const res = await axios.get(url + "/auth");
      dispatch({
        type: "user_geted",
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: "auth_error",
        payload: err.response.data,
      });
    }
  };

  const loginUser = async (userData) => {
    const url = envConfig();
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post(url + "/auth", userData, config);
      dispatch({
        type: "success_login",
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: "fail_login",
        payload: err.response.data.error[0].msg,
      });
    }
  };

  const logoutUser = () => {
    dispatch({
      type: "logout",
    });
  };

  return (
    <AuthContext.Provider
      value={{
        userAuth: state.userAuth,
        errors: state.errors,
        registerUser,
        loginUser,
        logoutUser,
        getUser: getUser,
        user: state.user,
        loading: state.loading,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
