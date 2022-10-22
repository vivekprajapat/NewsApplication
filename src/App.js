// import logo from './logo.svg'; // i can comment this because of i dont want the react logo.
import "./App.css";

// we have erase the function based component, because of we want class based components.
// This is app.js file.
// then i will enter rcc for class based component.

import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
// import LoadingBar from "react-top-loading-bar";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class App extends Component {
  
  render() {
    return (
      <div>
        <Router>
          <Navbar />
        
          <Switch>
            <Route exact path="/">
              {
                <News
                  key="general"
                  country="in"
                  pageSize={8}
                  category="general"
                />
              }
            </Route>

            <Route exact path="/business">
              {
                <News
                  key="business"
                  country="in"
                  pageSize={8}
                  category="business"
                />
              }
            </Route>
            <Route exact path="/entertainment">
              {
                <News
                  key="entertainment"
                  country="in"
                  pageSize={8}
                  category="entertainment"
                />
              }
            </Route>
            <Route exact path="/general">
              {
                <News
                  key="general"
                  country="in"
                  pageSize={8}
                  category="general"
                />
              }
            </Route>
            <Route exact path="/sports">
              {
                <News
                  key="sports"
                  country="in"
                  pageSize={8}
                  category="sports"
                />
              }
            </Route>
            <Route exact path="/technology">
              {
                <News
                  key="technology"
                  country="in"
                  pageSize={8}
                  category="technology"
                />
              }
            </Route>

            <Route exact path="/health">
              {
                <News
                  key="health"
                  country="in"
                  pageSize={8}
                  category="health"
                />
              }
            </Route>
            <Route exact path="/science">
              {
                <News
                  key="science"
                  country="in"
                  pageSize={8}
                  category="science"
                />
              }
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
