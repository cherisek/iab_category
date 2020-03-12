import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import IabPage from "./IabPage";
import ThreatsPage from "./ThreatsPage";
import EventsPage from "./EventsPage";
import SideNav from "./SideNav";
import Footer from "./Footer";

class Index  extends Component {
  constructor(props) {
    super(props);
      this.state = {
      }
  }

  render() {
    return (
      <Router>
        <div className="gds-persist-nav -gds-persist-nav--page-header">
          <SideNav />
          <Switch>
            <Route path="/index/iab" component={IabPage} />
            <Route path="/index/threats" component={ThreatsPage} />
            <Route path="/index/events" component={EventsPage} />
          </Switch>
        </div>
        <Footer />
      </Router>
    );
  }
} 

export default Index; 
