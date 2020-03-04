import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import IabAccordion from "./iabaccordion";
import Threats from "./threats";
import Events from "./events";
import SideNav from "./sidenav";
import Footer from "./footer";
import TreeNav from "./treenav";


class Index  extends Component {
  constructor(props) {
    super(props);
      this.state = {
        IabData: props.IabData
      }
  }

  render() {
    return (
      <Router>
        <div className="gds-persist-nav -gds-persist-nav--page-header">
          <SideNav />
          <section className="gds-persist-nav__main-content -overflow-y-hidden">
            <div className="gds-layout__container gds-layout__container--full-width -p-h-4">
              <div className="gds-layout__row">
                <Switch>
                  <Route path="/index/iab">
                    <IabAccordion />
                  </Route>
                  <Route path="/index/threats">
                    <Threats />
                  </Route>
                  <Route path="/index/events">
                    <Events />
                  </Route>
                </Switch>
                <TreeNav /> 
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </Router>
    );
  }
} 

export default Index; 