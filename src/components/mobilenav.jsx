import React, { Fragment, Component } from "react";
import { withRouter } from "react-router-dom"; 
import logo from "../images/new-logo.svg";

class MobileNav extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      width: window.innerWidth, 
        sideNavOpen: true,
    };  
    this.handleHomePage = this.handleHomePage.bind(this);
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

  handleHomePage() {
    this.props.history.push('/'); 
  } 

  toggleSideNav = () => {
    this.setState({ sideNavOpen: !this.state.sideNavOpen });
  }

  render() {

    return (
      <Fragment>     
          <header className="gds-spa-header -color-bg-lt-3 -color-bd-lt-3">
            <div className="gds-spa-header__primary-nav">
              <div className="gds-page-header__primary-nav">
                <button className="gds-page-header__menu -m-r-3" onClick={this.toggleSideNav}>
                  <span className="gds-page-header__menu-line"></span>
                  <span className="gds-page-header__menu-line"></span>
                  <span className="gds-page-header__menu-line"></span>
                  <span className="gds-page-header__menu-line"></span>
                </button>
              </div>
              <div className="gds-spa-header__section gds-spa-header__section--product" style={{'borderLeft': 'transparent'}}>
                <img className="logo-index" src={logo} alt="gumgum logo" onClick={this.handleHomePage}/>
              </div>
            </div>
          </header>
          <aside className={`gds-persist-nav__sidebar ${this.state.sideNavOpen ? "gds-persist-nav__sidebar--toggle":""}`} style={{'top': '57px'}}>
            <ul className="gds-persist-nav__top-nav">
              <li className="gds-persist-nav__item--active">
                <a href="/"className="gds-persist-nav__link gds-text--regular -text-tr-up">
                  iab
                </a>
              </li>
              <li className="gds-persist-nav__item">
                <a href="/"className="gds-persist-nav__link gds-text--regular -text-tr-up">
                  threats
                </a>
              </li>
              <li className="gds-persist-nav__item">
                <a href="/"className="gds-persist-nav__link gds-text--regular -text-tr-up">
                events
                </a>
              </li>
            </ul>
          </aside> 
          <div className="gds-persist-nav__mobile-close" data-sidebar-toggle="gds-persist-nav__sidebar--toggle"></div>
      </Fragment>
    );
  }
} 

export default withRouter(MobileNav); 