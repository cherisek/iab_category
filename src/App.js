import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import Index from "./pages/index"
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
