import React, { Fragment, Component } from "react";
import { BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Iab from "./iab";
import Threats from "./threats";
import Events from "./events";
import SideNav from "./sidenav";
import Footer from "./footer";

class Index  extends Component {

  render() {
    return (
      <Router>
        <div className="gds-persist-nav -gds-persist-nav--page-header">
          <SideNav />
          <section className="gds-persist-nav__main-content -p-v-5 -p-h-4 -overflow-y-hidden">
            <Switch>
              <Route path="/index/iab">
                <Iab />
              </Route>
              <Route path="/index/threats">
                <Threats />
              </Route>
              <Route path="/index/events">
                <Events />
              </Route>
            </Switch>
          </section>
        </div>
        <Footer />
      </Router>
    );
  }
} 

export default Index; 