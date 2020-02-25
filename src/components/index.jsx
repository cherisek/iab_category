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
        <div className="gds-persist-nav -gds-persist-nav--page-header">
          <SideNav />
          <section className="gds-persist-nav__main-content -p-v-5 -p-h-4 -overflow-y-hidden">
            <Table />
          </section>
        </div>
        <Footer />
      </Fragment>
    );
  }
} 

export default Index; 