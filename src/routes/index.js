import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "../pages/index";
import Blog from "../pages/blog";
import Post from "../pages/post";
import Project from "../pages/project";
import About from "../pages/about";

const index = () => {
  return (
    <Switch>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/project">
        <Project />
      </Route>
      <Route path="/blog/:slug">
        <Post />
      </Route>
      <Route path="/blog">
        <Blog />
      </Route>
      <Route path="/" exact>
        <HomePage />
      </Route>
    </Switch>
  );
};

export default index;
