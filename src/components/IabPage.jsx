import React, { Fragment, Component } from "react";
import iabData from "../constants/IabData";
import IabAccordion from "./IabAccordion"
import TreeNav from "./TreeNav";

class IapPage extends Component {
  constructor(props) {
    super(props)
  }

  handleShow = (i) => {
    var items = [];
  
    for (var i = 0; i < 100; i++) {
      items.push(i);
    }  
  
    var List = React.createClass({
      getInitialState: function() {
        return {index: 0};
      }
    })  
  
    this.setState({index: i});
    this.refs[i].scrollIntoView({block: 'end', behavior: 'smooth'});
  }

  render() {
    return (
      <Fragment>
        <section className="gds-persist-nav__main-content">
          <div className="gds-layout__container gds-layout__container--full-width">
            <div className="gds-layout__row">
              <IabAccordion />
            </div>
          </div>
        </section>
        <TreeNav data={iabData} />
      </Fragment>
    );
  }
}

export default IapPage; 
