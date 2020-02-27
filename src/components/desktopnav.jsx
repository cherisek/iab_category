import React, { Fragment, Component } from "react";
import { withRouter, NavLink } from "react-router-dom"; 
import logo from "../images/new-logo.svg";
import TreeNav from "./treenav";

class DesktopNav extends Component {
  constructor(props) {
    super(props); 
    this.handleHomePage = this.handleHomePage.bind(this);
  }

  handleHomePage() {
    this.props.history.push('/'); 
  } 

  render() {

    return (
      <Fragment>
        <nav className="gds-persist-nav__sidebar -m-r-6">
          <NavLink to="/" target="/">
            <img className="logo-index -p-h-4 -m-b-3" src={logo} alt="gumgum logo"/>
          </NavLink>
          <NavLink className="gds-persist-nav__link -m-b-4  gds-text--regular -text-tr-up " activeClassName="gds-persist-nav__link--active" to="/index/iab">
            iab
          </NavLink>
          <NavLink className="gds-persist-nav__link -m-b-4  gds-text--regular -text-tr-up" activeClassName="gds-persist-nav__link--active"  to="/index/threats">
            threats
          </NavLink>
          <NavLink className="gds-persist-nav__link -m-b-4  gds-text--regular -text-tr-up" activeClassName="gds-persist-nav__link--active" to="/index/events">
            events
          </NavLink>
          </nav>
          <TreeNav /> 
        </Fragment>  
    );
  }
} 

export default withRouter(DesktopNav); 