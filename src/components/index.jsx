import React, { Fragment, Component } from "react";
import logo from "../images/new-logo.svg";
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
        <header className="gds-spa-header -p-h-3 -color-bg-lt-3 -color-bd-lt-3">
          <img className="logo-index -m-t-2" src={logo} alt="gumgum logo" onClick={this.handleHomePage}/>
          <div className="gds-spa-header__primary-nav -p-h-3" style={{'marginLeft': 'auto', 'marginRight': 'auto'}}>
            <nav className="">
              <ul className="gds-nav-tabs gds-nav-tabs--underline gds-nav-tabs--justified" data-gds-nav="7">
                <li className="gds-nav-tabs__list-item gds-nav-tabs__list-item--underline gds-nav-tabs__list-item--active" data-gds-nav-item="">
                  <a href="/" className="gds-nav-tabs__link gds-nav-tabs__link--underline">Iab<span className="active-tab-nav"></span></a>
                </li>
                <li className="gds-nav-tabs__list-item gds-nav-tabs__list-item--underline" data-gds-nav-item="">
                  <a href="/" className="gds-nav-tabs__link gds-nav-tabs__link--underline" data-gds-nav-button="2" data-gds-nav-type="">Threats</a>
                </li>
                <li className="gds-nav-tabs__list-item gds-nav-tabs__list-item--underline" data-gds-nav-item="">
                  <a href="/" className="gds-nav-tabs__link gds-nav-tabs__link--underline" data-gds-nav-button="3" data-gds-nav-type="tab">Events</a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <div className="gds-persist-nav gds-persist-nav--page-header -p-t-5">
        <SideNav />
        <section className="gds-persist-nav__main-content -m-h-4">
        <div className="gds-layout__container" style={{'paddingTop': '4rem', 'paddingLeft': '0.2rem', 'paddingRight': '0.2rem'}}>
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