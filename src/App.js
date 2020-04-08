import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import props from "prop-types";
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

  test() {
    const categoryExist = props.categoryExist; 
    if (!categoryExist) {
      return <NotFoundPage />
    }
  }

  render() {
    return (
        <Router>
          <Switch>
            <Route exact path="/" component={Home} /> 
            <Route path="/index" component={Index} /> 
            <Route path="*" component={NotFoundPage} test={this.test} /> 
          </Switch>
        </Router>
    )
  }
}
export default App;
