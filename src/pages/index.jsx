import React, { Fragment, Component } from "react";
import logo from "../images/logo-white.svg";
// import Data from "../components/data";
// import { data }from "../components/data";
import MainContent from "./maincontent";
import SideNav from "./sidenav";
import Footer from "./footer";

 
class Index extends Component {
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
        <header className="gds-spa-header" style={{'padding': '0.5rem'}}>
          <div className="gds-spa-header__primary-nav">
            <img className="logo-index" src={logo} alt="gumgum logo" style={{'height': '30px'}} onClick={this.handleHomePage}/> 
          </div>
        </header>
        <div className="gds-persist-nav gds-persist-nav--page-header">
        <SideNav />
        <section className="gds-persist-nav__main-content"  style={{'paddingLeft': '4rem', 'paddingRight': '4rem'}}>
        <div className="gds-layout__container" style={{'paddingTop': '4rem'}}>
          <div className="gds-form-group"> 
            <div className="gds-form-group__input-group -m-b-4">
              <div className="gds-search-select__control -m-r-2" data-gds-search-select="single" style={{'display': 'flex', 'width': '100%'}}>
                <input className="gds-search-select__input--sm -m-r-1" type="text" placeholder="Search for Category" style={{'flex': '1 0 8em', 'height': '30px'}}/> 
                <button className="gds-button gds-button--xs gds-button--primary -m-r-1">Search</button>
              </div>
            </div>
          </div>
          <MainContent />
        </div>
        </section>
        </div>
        <Footer />
      </Fragment>
    );
  }
} 

export default Index; 