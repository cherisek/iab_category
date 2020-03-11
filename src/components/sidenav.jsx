import React, { Component } from "react";
import { withRouter } from "react-router-dom"; 
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