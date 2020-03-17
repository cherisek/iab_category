import React, { Fragment, Component } from "react";
import threatsData from "../constants/ThreatsData";
import TreeNav from "./TreeNav";
import Accordion from "./Accordion";

class ThreatsPage extends Component {
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
              <Accordion data={threatsData} active={this.state.active} title="Threats Categories" />
            </div>
          </div>
        </section>
        <TreeNav goTo={this.goTo} data={threatsData} />
      </Fragment>
    );
  }
}

export default ThreatsPage; 
