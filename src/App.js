import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/home";
import Index from "./components/index"
import './App.scss';

function App() {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} /> 
          <Route exact path="/index" component={Index} /> 
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
