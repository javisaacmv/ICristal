import envConfig from "../../config";
import React from "react";
import axios from "axios";
import NotifContext from "./notificationContext";

const NotifState = (props) => {
  const [state, setState] = React.useState({
    res: null,
    errors: null,
    notifications: null,
  });
  const url = envConfig();

  const newNotification = async (data) => {
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post(url + "/notif", data, config);
      setState({
        ...state,
        res,
        errors: null,
      });
      getNotifications();
    } catch (err) {
      setState({
        ...state,
        res: null,
        errors: err.response.data,
      });
    }
  };

  const deleteNotification = async (id) => {
    try {
      const res = await axios.delete(url + `/notif/${id}`);
      setState({
        ...state,
        res,
        errors: null,
      });
      getNotifications();
    } catch (err) {
      setState({
        ...state,
        res: null,
        errors: err.response.data,
      });
    }
  };

  const getNotifications = async () => {
    try {
      const res = await axios.get(url + "/notif");
      setState({
        ...state,
        res,
        errors: null,
        notifications: res.data,
      });
    } catch (err) {
      console.log(err);
      setState({
        ...state,
        res: null,
        errors: err,
        notifications: null,
      });
    }
  };

  return (
    <NotifContext.Provider
      value={{
        newNotification,
        deleteNotification,
        getNotifications,
        response: state.res,
        notifications: state.notifications,
      }}
    >
      {props.children}
    </NotifContext.Provider>
  );
};

export default NotifState;
