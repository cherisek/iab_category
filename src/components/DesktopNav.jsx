import React, { Fragment, Component } from "react";
import { withRouter, NavLink } from "react-router-dom"; 

class DesktopNav extends Component {
  constructor(props) {
    super(props); 
    this.handleHomePage = this.handleHomePage.bind(this);
    this.state = {
        expanded: false
    }
  }

  handleHomePage() {
    this.props.history.push('/'); 
  } 

  toggleExpand = () => {
    this.setState({
        expanded: !this.state.expanded
    })  
  }

  render() {

    const navClass = this.state.expanded ? 'gds2-nav-bar' : 'gds2-nav-bar gds2-nav-bar--collapse'

    return (
      <Fragment>
        <nav className={navClass} data-sidebar="">
            <div className="gds2-nav-bar__branding">
                <div className="gds2-nav-bar__logo"></div>
            </div>
            <div className="gds2-nav-bar__controls">
                <div onClick={this.toggleExpand} className="gds2-nav-bar__toggle"><i className='fas fa-fw fa-bars'></i></div>
            </div>
            <ul className="gds2-nav-bar__items">
                <li className="gds2-nav-bar__item">
                     <NavLink className="gds2-nav-bar__link" activeClassName="gds2-nav-bar__item gds2-nav-bar__item--active" to="/index/iab">
                        <span className="gds-tooltip--right" data-tooltip="IAB Categories"><i className="gds2-nav-bar__icon fas fa-fw fa-sitemap"></i></span>
                        <span className="gds2-nav-bar__label">IAB Categories</span>
                    </NavLink>
                </li>
                <li className="gds2-nav-bar__item">
                    <NavLink className="gds2-nav-bar__link" activeClassName="gds2-nav-bar__item gds2-nav-bar__item--active" to="/index/threats">
                        <span className="gds-tooltip--right" data-tooltip="Threats"><i className="gds2-nav-bar__icon fas fa-fw fa-do-not-enter"></i></span>
                        <span className="gds2-nav-bar__label">Threats</span>
                    </NavLink>
                </li>
                <li className="gds2-nav-bar__item">
                    <NavLink className="gds2-nav-bar__link" activeClassName="gds2-nav-bar__item gds2-nav-bar__item--active" to="/index/events">
                        <span className="gds-tooltip--right" data-tooltip="Events"><i className="gds2-nav-bar__icon fas fa-fw fa-calendar-alt"></i></span>
                        <span className="gds2-nav-bar__label">Events</span>
                    </NavLink>
                </li>
            </ul>
            <ul className="gds2-nav-bar__footer">
                <li className="gds2-nav-bar__item">
                    <a className="gds2-nav-bar__link" href="/">
                            <span className="gds-tooltip--right" data-tooltip="home"><i className="gds2-nav-bar__icon ds2-nav-bar__icon--sm fas fa-fw fa-home"></i></span>
                            <span className="gds2-nav-bar__label">Home</span>
                    </a>
                </li>
            </ul>
        </nav>
      </Fragment>  
    );
  }
} 

export default withRouter(DesktopNav); 
