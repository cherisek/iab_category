import React, { Fragment, Component } from "react";
import { withRouter, NavLink } from "react-router-dom"; 
import logo from "../images/new-logo.svg";

class MobileNav extends Component {
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

    return (
      <Fragment>     
          <header className="gds-spa-header -p-a-2 -color-bg-lt-3 -color-bd-lt-3">
            <div className="gds-page-header__primary-nav -m-t-2">
              <button className="gds-page-header__menu" onClick={this.toggleSideNav}>
                <span className="gds-page-header__menu-line"></span>
                <span className="gds-page-header__menu-line"></span>
                <span className="gds-page-header__menu-line"></span>
                <span className="gds-page-header__menu-line"></span>
              </button>
            </div>
            <div className="gds-spa-header__secondary-nav -color-bd-lt-3">
              <NavLink to="/" target="/">
                <img className="logo-index" src={logo} alt="gumgum logo" />
              </NavLink>
            </div>
          </header>
          <nav className={`gds-persist-nav__sidebar ${this.state.sideNavOpen ? "gds-persist-nav__sidebar--toggle":""}`} style={{'top': '70px'}}>
            <NavLink className="gds-persist-nav__link gds-text--regular -text-tr-up -m-b-4" activeClassName="gds-persist-nav__link--active" to="/index/iab">
              iab
            </NavLink>
            <NavLink className="gds-persist-nav__link gds-text--regular -text-tr-up -m-b-4" activeClassName="gds-persist-nav__link--active" to="/index/threats">
              threats
            </NavLink>
            <NavLink className="gds-persist-nav__link gds-text--regular -text-tr-up" activeClassName="gds-persist-nav__link--active" to="/index/events">
              events
            </NavLink>
          </nav> 
          <div className="gds-persist-nav__mobile-close" data-sidebar-toggle="gds-persist-nav__sidebar--toggle"></div>
      </Fragment>
    );
  }
} 

export default withRouter(MobileNav); 