import React from "react";
import Navbar from "./scenes/components/Navbar";
import Home from "./scenes/home/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RegisterScene from "./scenes/register/RegisterScene";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={RegisterScene} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
