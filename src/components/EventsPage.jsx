import React, { Fragment, Component } from "react";
import eventsData from "../constants/EventsData";
import TreeNav from "./TreeNav";
import Accordion from "./Accordion";

class EventsPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: []
    }
  }

  componentWillMount() {
    const { search } = this.props.location
    let category = search.split('=')[1]
    if (category) {
      category = category.replace(/\%20/g, ' ')
      this.goTo(category)
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
              <Accordion data={eventsData} active={this.state.active} title="Events Categories" />
            </div>
          </div>
        </section>
        <TreeNav data={eventsData} goTo={this.goTo} />
      </Fragment>
    );
  }
}

export default EventsPage; 