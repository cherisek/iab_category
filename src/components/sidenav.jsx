import React, { Fragment, Component } from "react";
import { withRouter } from "react-router-dom"; 
import MobileNav from './mobilenav';
import DesktopNav from './desktopnav';

class SideNav extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      width: window.innerWidth, 
        sideNavOpen: true,
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

  toggleSideNav = () => {
    this.setState({ sideNavOpen: !this.state.sideNavOpen });
  }

  render() {
    const { width } = this.state; 
    const isMobile = width <= 1000; 

    return (
      <Fragment> 
        {
        isMobile ? 
           ( 
            <MobileNav /> 
          ) 
          : 
          (
            <DesktopNav />
  
          )
      }
      </Fragment>
    );
  }
} 

export default withRouter(SideNav); 