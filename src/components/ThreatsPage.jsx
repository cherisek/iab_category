import React, { Fragment, Component } from "react";
import ThreatsData from "../constants/ThreatsData";
import ThreatsAccordion from "./ThreatsAccordion"
import TreeNav from "./TreeNav";

class ThreatsPage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Fragment>
        <section className="gds-persist-nav__main-content">
          <div className="gds-layout__container gds-layout__container--full-width">
            <div className="gds-layout__row">
              <ThreatsAccordion />
            </div>
          </div>
        </section>
        <TreeNav data={ThreatsData} />
      </Fragment>
    );
  }
}

export default ThreatsPage; 
