import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/home";
import Index from "./components/index";
import './App.scss';


class App extends Component {
  constructor(props) {
    super(props); 
    this.handleViewAll = this.handleViewAll.bind(this); 
  } 

  handleViewAll() {
    this.props.history.push('/index');
  } 

  render() {
    return (
        <Router>
          <Switch>
            <Route exact path="/" component={Home} /> 
            <Route exact path="/index" component={Index} /> 
          </Switch>
        </Router>
    )
  }
}
export default App;
