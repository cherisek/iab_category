import React, { Fragment, Component } from "react";
import IabData from "../constants/iabdata";

class TreeNav extends Component {
  constructor(props) {
    super(props); 
      this.state = {
        active: true, 
      }; 
  }

  toggleCategory = () => {
    this.setState({ active: !this.state.active }); 
  }


  render() {
    return (
      <Fragment> 
        <div className="gds-layout__column"> 
          <h6 className="gds-text--header-md -m-b-3 -m-t-4 -text-tr-up">iab</h6>
          <aside className="gds-persist-nav__sidebar -m-t-2" style={{'height': '1000px'}}>
            <div className="gds-form-group -m-h-3 -m-b-3">    
              <div className="gds-search-select__control" data-gds-search-select="single">
                <input className="gds-form-group__text-input" type="text" placeholder="Search"/> 
                <i className="gds-form-group__text-input-icon btl bt-search"></i>
              </div>
            </div>
            <ul className="gds-persist-nav__top-nav">
              <li className="gds-persist-nav__item">
              <a href="/" className="gds-persist-nav__link gds-text--bold">
              Automotive
              </a>
              <ul className="gds-persist-nav__sub-nav">
                <li className="gds-persist-nav__sub-item">
                  <a href="/" className="gds-persist-nav__link">
                  Auto Body Styles
                  </a>     
                </li>
                <ul className="gds-persist-nav__sub-nav">
                  <li className="gds-persist-nav__sub-item">
                  <a href="/" className="gds-persist-nav__link">
                    Commercial Trucks
                  </a>     
                  </li>
              </ul> 
              <li className="gds-persist-nav__sub-item">
                <a href="/" className="gds-persist-nav__link">
                Auto Type
                </a>     
              </li>
              <li className="gds-persist-nav__sub-item">
              <a href="/" className="gds-persist-nav__link">
              Car Culture
              </a>     
              </li>
              <li className="gds-persist-nav__sub-item">
              <a href="/" className="gds-persist-nav__link">
              Dash Cam Videos 
              </a>     
              </li> 
              <li className="gds-persist-nav__sub-item">
              <a href="/" className="gds-persist-nav__link">
              Motorcycles
              </a>     
              </li>
              </ul>
              </li>
              </ul>
              <ul className="gds-persist-nav__top-nav">
              <li className="gds-persist-nav__item">
              <a href="/" className="gds-persist-nav__link">
              Books and Literature
              </a>
              </li>
              </ul>
              <ul className="gds-persist-nav__top-nav">
              <li className="gds-persist-nav__item">
              <a href="/" className="gds-persist-nav__link">
              Business and Finance 
              </a>
              </li>
              </ul>
              <ul className="gds-persist-nav__top-nav">
              <li className="gds-persist-nav__item">
              <a href="/" className="gds-persist-nav__link gds-text--bold">
              Careers
              </a>
              <ul className="gds-persist-nav__sub-nav">
              <li className="gds-persist-nav__sub-item">
              <a href="/" className="gds-persist-nav__link">
              Apprenticeships 
              </a>     
              </li>
              <li className="gds-persist-nav__sub-item">
              <a href="/" className="gds-persist-nav__link">
              Career Advice
              </a>     
              </li>
              <li className="gds-persist-nav__sub-item">
              <a href="/" className="gds-persist-nav__link">
              Career Planning 
              </a>     
              </li>
              <li className="gds-persist-nav__sub-item">
              <a href="/" className="gds-persist-nav__link">
              Job Search
              </a>  
              <ul className="gds-persist-nav__sub-nav">
              <li className="gds-persist-nav__sub-item">
                <a href="/" className="gds-persist-nav__link">
                  Job Fairs
                </a>     
              </li>
              <li className="gds-persist-nav__sub-item">
                <a href="/" className="gds-persist-nav__link">
                  Remote Working 
                </a>     
              </li>
              </ul>    
              </li>
              </ul>
              </li>
              </ul>
              <ul className="gds-persist-nav__top-nav">
              <li className="gds-persist-nav__item">
              <a href="/" className="gds-persist-nav__link">
              Education
              </a>
              </li>
              </ul>
              <ul className="gds-persist-nav__top-nav">
              <li className="gds-persist-nav__item">
              <a href="/" className="gds-persist-nav__link">
              Events and Attraction
              </a>
              </li>
              </ul>
              <ul className="gds-persist-nav__top-nav">
              <li className="gds-persist-nav__item">
              <a href="/" className="gds-persist-nav__link">
              Family and Relationships
              </a>
              </li>
              </ul>
          </aside>
        </div>
      </Fragment>
    );
  }
} 

export default TreeNav; 