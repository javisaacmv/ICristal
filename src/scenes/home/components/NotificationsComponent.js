import React from "react";
import NewNotificationComponent from "./NewNotificationComponent";

const NotificationsComponent = () => {
  return (
    <div className="box content">
      <h1 className="title has-text-white">Mis Recordatorios</h1>
      <NewNotificationComponent />
      <br />
      <br />
      <div className="notification is-danger">
        <button className="delete"></button>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum
        dolor sit amet, consectetur adipiscing elit
      </div>
      <div className="notification is-warning">
        <button className="delete"></button>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum
        dolor sit amet, consectetur adipiscing elit
      </div>
      <div className="notification is-info">
        <button className="delete"></button>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum
        dolor sit amet, consectetur adipiscing elit
      </div>
    </div>
  );
};

export default NotificationsComponent;
