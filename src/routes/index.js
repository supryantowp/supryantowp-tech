import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "../pages/index";

const index = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <HomePage />
      </Route>
    </Switch>
  );
};

export default index;
