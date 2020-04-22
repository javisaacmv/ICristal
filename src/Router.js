import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

const LoginScene = React.lazy(() => import("./scenes/login/LoginScene"));

const RegisterScene = React.lazy(() =>
  import("./scenes/register/RegisterScene")
);
