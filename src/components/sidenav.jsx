import React, { Fragment, Component } from "react";
import logo from "../images/new-logo.svg";

class SideNav extends Component {
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
        <aside className="gds-persist-nav__sidebar -m-r-5">
          <img className="logo-index -m-b-5 -p-h-5" src={logo} alt="gumgum logo" onClick={this.handleHomePage}/>
            <ul className="gds-persist-nav__top-nav">
              <li className="gds-persist-nav__item--active -m-b-4">
                <a href="/"className="gds-persist-nav__link gds-text--regular -text-tr-up">
                  iab
                </a>
              </li>
              <li className="gds-persist-nav__item -m-b-4">
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
        </Fragment>
    );
  }
} 

export default SideNav; 