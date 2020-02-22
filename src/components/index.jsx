import React, { Fragment, Component } from "react";
import MainContent from "./maincontent";
import SideNav from "./sidenav";
import TreeNav from "./treenav";
import Footer from "./footer";

 
class Index extends Component {
  constructor(props) {
    super(props); 
      this.state = {
        sideNavOpen: true,
      };
    this.handleHomePage = this.handleHomePage.bind(this);
  }

  handleHomePage() {
    this.props.history.push('/'); 
  } 

  toggleSideNav = () => {
    this.setState({ sideNavOpen: !this.state.sideNavOpen });
    console.log('clicked clicked')
  }

  render() {
    return (
      <Fragment>
        <div className="gds-persist-nav -gds-persist-nav--page-header">
          <SideNav />
          <TreeNav />
          {/* {this.state.sideNavOpen ? <SideNav /> : null } /> */}
          <section className="gds-persist-nav__main-content -p-v-5 -p-h-4 -m-h-3">
            <MainContent />
          </section>
        </div>
        <Footer />
      </Fragment>
    );
  }
} 

export default Index; 