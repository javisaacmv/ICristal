import React from "react";
import NewNotificationComponent from "./NewNotificationComponent";
import NotifContext from "../../../context/notificationContext/notificationContext";
import NotificationComp from "./NotificationComp";
import moment from "moment";
import AuthContext from "../../../context/authContext/authContext";

const NotificationsComponent = () => {
  const { user } = React.useContext(AuthContext);
  const {
    newNotification,
    getNotifications,
    notifications,
    deleteNotification,
  } = React.useContext(NotifContext);

  const [onLoading, setOnLoading] = React.useState(false);

  let notifArr = React.useMemo(() => displayNotifications(), [
    notifications,
    onLoading,
  ]);

  React.useEffect(() => {
    getNotifications();
    // eslint-disable-next-line
  }, [onLoading, user]);

  function displayNotifications() {
    if (!notifications) return;
    const today = new Date();
    let notifArr = notifications;
    notifArr.sort(function (a, b) {
      return moment(a.deadline) - moment(b.deadline);
    });
    notifArr = notifArr.filter((n) => moment(today) < moment(n.deadline));
    return notifArr;
  }

  return (
    <div className="box content">
      <h1 className="title has-text-white">Mis Recordatorios</h1>
      <NewNotificationComponent
        saveNotification={newNotification}
        getNotifications={getNotifications}
        setOnLoading={setOnLoading}
      />
      <br />
      <br />
      {notifArr &&
        notifArr.map((n) => (
          <NotificationComp
            id={n._id}
            title={n.title}
            description={n.description}
            deadline={n.deadline}
            active={n.active}
            setOnLoading={setOnLoading}
            deleteNotification={deleteNotification}
            getNotifications={getNotifications}
          />
        ))}
    </div>
  );
};

export default NotificationsComponent;
