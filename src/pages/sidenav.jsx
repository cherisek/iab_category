import React, { Fragment, Component } from "react";
// import Data from "../components/data";
// import { data }from "../components/data";

 
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
          <aside className="gds-persist-nav__sidebar">
            <ul>
              <li>
                <span className="gds-tree__link gds-tree__link--active gds-tree__link">
                  <i className="fal fa-fw fa-caret-down"></i>
                    Automotive
                </span>
                <ul className="gds-tree__sub-nav">
                  <li className="gds-sub-item">
                  <i className="fal fa-fw fa-caret-down"></i>
                    Auto Body Styles
                  </li>
                  <li className="gds-sub-item-level-2" style={{'backgroundColor': '#dbdbdb' }}>
                    Commercial Trucks 
                  </li>
                  <li className="gds-sub-item">
                    Auto Type 
                  </li>
                  <li className="gds-sub-item">
                   Car Culture
                  </li>
                  <li className="gds-sub-item">
                    Dash Cam Videos 
                  </li>
                  <li className="gds-sub-item">
                   Motorcycles 
                  </li>
                </ul>
              </li>
            </ul>
            <ul>
              <li>
                <span className="gds-tree__link gds-tree__link--active gds-tree__link">
                  <i className="fal fa-fw fa-caret-right"></i>
                    Books and Literature
                </span>
              </li>
            </ul>
            <ul>
              <li>
                <span className="gds-tree__link gds-tree__link--active gds-tree__link">
                  <i className="fal fa-fw fa-caret-right"></i>
                    Business and Finance 
                </span>
              </li>
            </ul>
            <ul>
              <li>
                <span className="gds-tree__link gds-tree__link--active gds-tree__link">
                  <i className="fal fa-fw fa-caret-down"></i>
                    Careers
                </span>
                <ul className="gds-tree__sub-nav">
                  <li className="gds-sub-item">
                    Apprenticeships
                  </li>
                  <li className="gds-sub-item">
                    Career Advice
                  </li>
                  <li className="gds-sub-item">
                    Career Planning
                  </li>
                  <li className="gds-sub-item">
                  <i className="fal fa-fw fa-caret-down"></i>
                   Job Search
                  </li>
                  <li className="gds-sub-item-level-2">
                    Job Fairs 
                  </li>
                  <li className="gds-sub-item-level-2">
                    Job Fairs 
                  </li>
                  <li className="gds-sub-item">
                   Remote Working 
                  </li>
                </ul>
              </li>
            </ul>
            <ul>
              <li>
                <span className="gds-tree__link gds-tree__link--active gds-tree__link">
                  <i className="fal fa-fw fa-caret-right"></i>
                    Education
                </span>
              </li>
            </ul>
            <ul>
              <li>
                <span className="gds-tree__link gds-tree__link--active gds-tree__link">
                  <i className="fal fa-fw fa-caret-right"></i>
                    Events and Attractions
                </span>
              </li>
            </ul>
          </aside>
      </Fragment>
    );
  }
} 

export default SideNav; 