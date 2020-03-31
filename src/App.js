import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Index from "./components/Index";
import NotFoundPage from "./components/NotFoundPage";
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
            <Route path="/index" component={Index} /> 
            <Route path="*" component={NotFoundPage} /> 
            <Route path="/index/*" component={NotFoundPage} /> 
          </Switch>
        </Router>
    )
  }
}
export default App;
