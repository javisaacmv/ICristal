import React from "react";
import AuthContext from "../../context/authContext/authContext";

const Navbar = (props) => {
  const { userAuth, logoutUser, user } = React.useContext(AuthContext);

  function onLogout() {
    logoutUser();
  }

  console.log(user);

  return (
    <nav
      className="navbar is-dark"
      role="navigation"
      aria-label="main navigation"
    >
      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <a href={"/"} className="navbar-item">
            {"ICristal " + (user ? " - " + user.name : "")}
          </a>

          <a className="navbar-item">Mis categorias</a>

          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">Acerca de</a>

            <div className="navbar-dropdown">
              <a className="navbar-item">About</a>
              <a className="navbar-item">Jobs</a>
              <a className="navbar-item">Contact</a>
              <hr className="navbar-divider" />
              <a className="navbar-item">Report an issue</a>
            </div>
          </div>
        </div>
      </div>

      <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">
            {!userAuth ? (
              <div>
                <a href={"/register"} className="button is-primary">
                  <strong>Sign up</strong>
                </a>
                <a href="/login" className="button is-light">
                  Log in
                </a>
              </div>
            ) : (
              <button onClick={() => onLogout()} className="button is-light">
                Log out
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
