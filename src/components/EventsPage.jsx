import React, { Fragment, Component } from "react";
import EventsData from "../constants/EventsData";
import EventsAccordion from "./EventsAccordion"
import TreeNav from "./TreeNav";

class EventsPage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Fragment>
        <section className="gds-persist-nav__main-content">
          <div className="gds-layout__container gds-layout__container--full-width">
            <div className="gds-layout__row">
              <EventsAccordion />
            </div>
          </div>
        </section>
        <TreeNav data={EventsData} />
      </Fragment>
    );
  }
}

export default EventsPage; 
