import React from "react";
import { Switch } from "react-router-dom";
import Route from "./Route";

import SignIn from "../pages/SignIn";
import Home from "../pages/Home";
import Product from "../pages/Product";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/home" exact component={Home} isPrivate />
      <Route path="/product" exact component={Product} isPrivate />
    </Switch>
  );
}
