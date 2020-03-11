import React, { Fragment, Component } from "react";
import { withRouter } from "react-router-dom"; 
import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav';

class SideNav extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      sideNavOpen: true
    };  
  }

  render() {

    return (
      <DesktopNav />
    );
  }
} 

export default withRouter(SideNav); 