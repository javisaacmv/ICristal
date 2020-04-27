import React from "react";
import NotificationsComponent from "./components/NotificationsComponent";
import AuthContext from "../../context/authContext/authContext";
import NotifState from "../../context/notificationContext/notificationState";

const Home = () => {
  const { getUser } = React.useContext(AuthContext);

  React.useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      <div className="section">
        <NotifState>
          <NotificationsComponent />
        </NotifState>
      </div>
    </div>
  );
};

export default Home;
