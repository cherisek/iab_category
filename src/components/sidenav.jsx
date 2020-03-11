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
    this.handleWindowSizeChange = this.handleWindowSizeChange.bind(this);
  }

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange); 
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange); 
  }

  handleWindowSizeChange() {
    this.setState({ width: window.innerWidth });
  }

  render() {

    return (
      <DesktopNav />
    );
  }
} 

export default withRouter(SideNav); 