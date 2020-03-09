import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import IabAccordion from "./IabAccordion";
import ThreatsAccordion from "./ThreatsAccordion";
import EventsAccordion from "./EventsAccordion";
import SideNav from "./SideNav";
import Footer from "./Footer";
import IabTreeNav from "./IabTreeNav";
import ThreatsTreeNav from "./ThreatsTreeNav";
import EventsTreeNav from "./EventsTreeNav";


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
          <section className="gds-persist-nav__main-content -overflow-y-hidden -m-r-6">
            <div className="gds-layout__container gds-layout__container--full-width">
              <div className="gds-layout__row">
                <Switch>
                  <Route path="/index/iab">
                    <IabAccordion />
                  </Route>
                  <Route path="/index/threats">
                    <ThreatsAccordion />
                  </Route>
                  <Route path="/index/events">
                    <EventsAccordion />
                  </Route>
                </Switch>
              </div>
            </div>
          </section>
          <Switch>
            <Route path="/index/iab">
              <IabTreeNav />
            </Route>
            <Route path="/index/threats">
              <ThreatsTreeNav />
            </Route>
            <Route path="/index/events">
              <EventsTreeNav />
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    );
  }
} 

export default Index; 