import React from "react";
import NotificationsComponent from "./components/NotificationsComponent";
import AuthContext from "../../context/authContext/authContext";

const Home = () => {
  const { getUser } = React.useContext(AuthContext);

  React.useEffect(() => {
    getUser();
  }, [getUser]);

  return (
    <div>
      <div className="section">
        <NotificationsComponent />
      </div>
    </div>
  );
};

export default Home;
