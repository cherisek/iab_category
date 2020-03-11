import React, { Fragment } from "react";
import { withRouter } from "react-router-dom"; 
import logo from "../images/new-logo-v2.svg";
import jumboImage from "../images/jumbotron_image.jpg";

class Header extends React.Component {
  constructor(props) {
    super(props); 
    this.handleViewAll = this.handleViewAll.bind(this); 
  }

  handleViewAll() {
    this.props.history.push('/index/iab');
  } 

  render() {
    return (
      <Fragment>
        <div className="-color-bg-lt-3 -color-bd-lt-3" style={{'background-image': `url(${jumboImage})`, 'background-position': 'center center', 'background-size': 'cover'}}>
          <header className="-m-b-6 -p-v-4-xs -p-v-6-md">
            <img className="logo -m-b-4" src={logo} alt="gumgum logo"/> 
              <div className="gds-form-group -m-a-4">
                <div className="gds-form-group__text-input--button-cap">
                  <input className="gds-form-group__text-input  -color-tx-white" type="text" placeholder="Search Categories" data-gds-search-input="0"/>
                  <i className="gds-form-group__text-input-icon btl bt-search -color-tx-white"></i>
                </div>
              </div>
              <button className="gds-button gds-button--xs gds-button--white -flex -p-h-4" onClick={this.handleViewAll} style={{'margin': 'auto'}}>View All</button>
          </header>
        </div> 
        <div className="gds-layout__container">
          <div className="gds-layout__row">
            <div className="gds-layout__column--lg-4 gds-layout__column--md-4 -p-h-4 -m-b-4">
              <h1 className="gds-text--header-xs gds-text--bold -text-center -m-b-3">About IAB</h1>
              <p className="gds-text--body-md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="gds-layout__column--lg-4 gds-layout__column--md-4 -p-h-4 -m-b-4">
              <h1 className="gds-text--header-xs gds-text--bold -m-b-3 -text-center">About GumGum Events</h1>
                <p className="gds-text--body-md">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                  occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
            <div className="gds-layout__column--lg-4 gds-layout__column--md-4 -m-b-4 -p-h-4">
              <h1 className="gds-text--header-xs gds-text--bold -m-b-3 -text-center">About GumGum Threats</h1>
              <p className="gds-text--body-md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default withRouter(Header); 