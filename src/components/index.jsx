import React, { Fragment, Component } from "react";
import Table from "./table";
import SideNav from "./sidenav";
import Footer from "./footer";

 
class Index  extends Component {
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
          <SideNav />
          <section className="gds-persist-nav__main-content">
            <Table />
          </section>
        <Footer />
      </Fragment>
    );
  }
} 

export default Index; 