import React, { Fragment, Component } from "react";


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
            <ul className="gds-persist-nav__top-nav">
              <li className="gds-persist-nav__item">
                <a href="/" className="gds-persist-nav__link">
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
                <a href="/" className="gds-persist-nav__link">
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
      </Fragment>
    );
  }
} 

export default SideNav; 