import React, { Fragment, Component } from "react";
import iabData from "../constants/IabData";
import Accordion from "./Accordion"
import TreeNav from "./TreeNav";

class IapPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: []
    }
  }

  goTo = (element, ...parents) => {
    this.setState({
      active: [element, ...parents]
    });
  }

  render() {
    return (
      <Fragment>
        <section className="gds-persist-nav__main-content">
          <div className="gds-layout__container gds-layout__container--full-width">
            <div className="gds-layout__row">
              <Accordion data={iabData} active={this.state.active} />
            </div>
          </div>
        </section>
        <TreeNav data={iabData} goTo={this.goTo} />
      </Fragment>
    );
  }
}

export default IapPage; 
