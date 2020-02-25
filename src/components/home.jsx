import React, { Fragment } from "react";
import { withRouter } from "react-router-dom"; 
import logo from "../images/new-logo.svg";

class Header extends React.Component {
  constructor(props) {
    super(props); 
    this.handleViewAll = this.handleViewAll.bind(this); 
  } 
  handleViewAll() {
    this.props.history.push('/index');
  } 

  render() {
    return (
        <Fragment>
          <header className="gds-page-header -m-b-6 -color-bg-lt-3">
            <div className="gds-layout-container -p-v-1">
              <img className="logo -m-t-6" src={logo} alt="gumgum logo"/> 
              <div className="gds-search gds-search--shown -pos-rel -color-bg-none" style={{'backgroundColor': 'transparent'}}> 
                <div className="gds-search__input-holder -m-r-3 -m-t-0">
                  <div className="gds-form-group gds-search__form-group" style={{'boxShadow': 'none'}}>
                    <input className="gds-form-group__text-input" type="text" placeholder="Search..." data-gds-search-input="0" />
                    <i className="gds-form-group__text-input-icon btl bt-search"></i>
                  </div>
                </div>
                <button className="gds-button gds-button--xs gds-button--primary"onClick={this.handleViewAll} >View All</button>
              </div>
            </div>      
          </header>
          <div className="gds-layout__container--home -m-b-6">
            <div className="gds-layout__row">
                <div className="gds-layout__column--md-4 -p-h-4 -m-b-4">
                  <h1 className="gds-text--header-xs gds-text--bold -text-center -m-b-3">About Iab</h1>
                    <p className="gds-text--body-md">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                      occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <div className="gds-layout__column--md-4 -p-h-4 -m-b-4">
                  <h1 className="gds-text--header-xs gds-text--bold -m-b-3 -text-center">About GumGum Events</h1>
                  <p className="gds-text--body-md">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                    occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </div>
                <div className="gds-layout__column--md-4 -p-h-4 -m-b-4">
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