import React from "react";
import NewNotificationComponent from "./NewNotificationComponent";
import NotifContext from "../../../context/notificationContext/notificationContext";
import NotificationComp from "./NotificationComp";
import moment from "moment";

const NotificationsComponent = () => {
  const { newNotification, getNotifications, notifications } = React.useContext(
    NotifContext
  );

  const [onAdd, setOnAdd] = React.useState(false);

  let notifArr = React.useMemo(() => displayNotifications(), [
    notifications,
    onAdd,
  ]);

  React.useEffect(() => {
    if (!notifications) {
      getNotifications();

      return;
    }
    getNotifications();
    // eslint-disable-next-line
  }, [onAdd]);

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
        setOnAdd={setOnAdd}
      />
      <br />
      <br />
      {notifArr &&
        notifArr.map((n) => (
          <NotificationComp
            id={n.id}
            title={n.title}
            description={n.description}
            deadline={n.deadline}
            active={n.active}
          />
        ))}
    </div>
  );
};

export default NotificationsComponent;
