import React from "react";
import Navbar from "./scenes/components/Navbar";
import Home from "./scenes/home/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RegisterScene from "./scenes/register/RegisterScene";
import AuthState from "./context/authContext/authState";
import LoginScene from "./scenes/login/LoginScene";
import "./App.css";
import PrivateRoute from "./scenes/components/PrivateRoute";
import setToken from "../src/utils/setToken";

if (localStorage.token) {
  console.log(localStorage.token);
  setToken(localStorage.token);
}

function App() {
  return (
    <AuthState>
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <PrivateRoute exact path="/" component={Home} />
            <Route exact path="/register" component={RegisterScene} />
            <Route exact path="/login" component={LoginScene} />
          </Switch>
        </div>
      </Router>
    </AuthState>
  );
}

export default App;
