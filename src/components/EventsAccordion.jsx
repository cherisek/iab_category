import React, { Fragment, Component } from "react";

class EventsAccordion extends Component {
  constructor(props) {
    super(props)
    this.state = {
      toggle: true,
    }
  } 

  toggleAccordion = (e) => {
    this.setState({ toggle: !this.state.toggle })
  }

  render() {

    return (
    <Fragment>
      <div className="gds-layout__column--lg-10 gds-layout__column--md-12 -p-v-5 -m-h-3">
        <div className="gds-accordion" data-gds-accordion=""> 
          <ul className="gds-accordion-list">
            <li className={this.state.toggle ? "gds-accordion__item gds-accordion__item--active" : "gds-accordion__item"} data-gds-accordion-item="">
              <h4 className="gds-accordion__item-title gds-accordion__item-title--sm" onClick={(e) => {this.toggleAccordion(e)}} data-gds-accordion-title="">
                Automotive
              </h4>
              <i className="gds-accordion__item-icon gds-accordion__item-icon--sm -cursor--pointer"></i>
              <ul className="gds-accordion__child-items">
                <li className="gds-accordion__child-item -color-bg-white -p-a-4">
                  <p className="gds-text--body-sm">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                      sed do eiusmod tempor incididunt ut labore et dolore magna 
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                      ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                      Duis aute irure dolor in reprehenderit in voluptate velit 
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                      occaecat cupidatat non proident, sunt in culpa qui officia 
                      deserunt mollit anim id est laborum.
                    </p>
                    <hr className="-color-bd-lt-3 -m-v-3 -p-b-4" />
                    <div className="gds-flex gds-flex--justify-between">
                      <div className="gds-flex__item gds-flex__item--grow-0 -m-b-3">
                        <div className="gds-flex-item">
                          <img src={'https://picsum.photos/id/1067/250/150'} alt="placeholder" />
                        </div>
                      </div> 
                      <div className="gds-flex__item gds-flex__item--grow-0 -m-b-3">
                        <div className="gds-flex-item">
                          <img src={'https://picsum.photos/id/1067/250/150'} alt="placeholder" />
                        </div>
                      </div> 
                      <div className="gds-flex__item gds-flex__item--grow-0 -m-b-3">
                        <div className="gds-flex-item">
                          <img src={'https://picsum.photos/id/1067/250/150'} alt="placeholder" />
                        </div>
                      </div> 
                      <div className="gds-flex__item gds-flex__item--grow-0 -m-b-3">
                        <div className="gds-flex-item">
                          <img src={'https://picsum.photos/id/1067/250/150'} alt="placeholder" />
                        </div>
                      </div> 

                      <div className="gds-flex__item gds-flex__item--grow-0 -m-b-3">
                        <div className="gds-flex-item">
                         <img src={'https://picsum.photos/id/1067/250/150'} alt="placeholder" />
                        </div>
                      </div> 
                      <div className="gds-flex__item gds-flex__item--grow-0 -m-b-3">
                        <div className="gds-flex-item">
                          <img src={'https://picsum.photos/id/1067/250/150'} alt="placeholder" />
                        </div>
                      </div> 
                      <div className="gds-flex__item gds-flex__item--grow-0 -m-b-3">
                        <div className="gds-flex-item">
                          <img src={'https://picsum.photos/id/1067/250/150'} alt="placeholder" />
                        </div>
                      </div> 
                      <div className="gds-flex__item gds-flex__item--grow-0 -m-b-3">
                        <div className="gds-flex-item">
                          <img src={'https://picsum.photos/id/1067/250/150'} alt="placeholder" />
                        </div>
                      </div>                    
                    </div>
                    <hr className="-color-bd-lt-3 -m-v-3 -p-b-2" />
                    <h6 className="gds-text--body-md -m-b-2">Terms</h6> 
                      <div className="gds-tag gds-text--body-sm">
                          accordion-item                   
                      </div>
                      <div className="gds-tag gds-text--body-sm">
                          keyword                     
                      </div>
                      <div className="gds-tag gds-text--body-sm">
                           longer keyword phrase                      
                      </div>
                      <div className="gds-tag gds-text--body-sm">
                          keyword  keyword                  
                      </div>
                      <div className="gds-tag gds-text--body-sm">
                          keyword phrase                      
                      </div>
                      <div className="gds-tag gds-text--body-sm">
                          keyword keyword keyword                     
                      </div>
                      <div className="gds-tag gds-text--body-sm">
                          keyword phrase                   
                      </div>
                      <div className="gds-tag gds-text--body-sm">
                          keyword                     
                      </div>
                      <hr className="-color-bd-lt-3 -m-v-3" />
                </li>
              </ul>
              <li className="gds-accordion__item gds-accordion__item--active -color-bg-white" data-gds-accordion-item="">
                <h4 className="gds-accordion__item-title gds-text--body-sm" data-gds-accordion-title="">Auto Body Styles</h4>
                <i className="gds-accordion__item-icon gds-accordion__item-icon--sm -cursor--pointer"></i>
                <ul className="gds-accordion__child-items -color-bg-white">
                    <li className="gds-accordion__child-item" data-gds-accordion-item="">
                      <h4 className="gds-accordion__child-item-title gds-text--body-sm">Commercial Trucks</h4>
                    </li>
                    <li className="gds-accordion__child-item" data-gds-accordion-item="">
                      <h4 className="gds-accordion__child-item-title gds-text--body-sm">Commercial Trucks</h4>
                    </li>
                    <li className="gds-accordion__child-item" data-gds-accordion-item="">
                        <h4 className="gds-accordion__child-item-title gds-text--body-sm">Sedan</h4>
                        <i className="gds-accordion__item-icon gds-accordion__item-icon--sm -cursor--pointer"></i>
                        <ul className="gds-accordion__child-items">
                        <li className="gds-accordion__child-item">
                            <h4 className="gds-accordion__child-item-title">Ricardo Vega<div className="gds-badge gds-badge--dark">32</div></h4>
                        </li>
                      </ul>
                    </li>
                </ul>
              </li>
            </li>
          </ul>
        </div>








          <div className="gds-accordion -m-t-3 -color-bg-white" data-gds-accordion=""> 
          <ul className="gds-accordion-list">
            <li className="gds-accordion__item" data-gds-accordion-item="">
              <h4 className="gds-accordion__item-title gds-accordion__item-title--sm" data-gds-accordion-title="">Books and Literature</h4>
              <i className="gds-accordion__item-icon gds-accordion__item-icon--sm"></i>
            </li>
          </ul>
          </div>  

          <div className="gds-accordion -m-v-3 -color-bg-white" data-gds-accordion=""> 
            <ul className="gds-accordion-list">
              <li className="gds-accordion__item" data-gds-accordion-item="">
                <h4 className="gds-accordion__item-title gds-accordion__item-title--sm" data-gds-accordion-title="">Business and Finance</h4>
                <i className="gds-accordion__item-icon gds-accordion__item-icon--sm"></i>
              </li>
            </ul>
          </div>  


          <div className="gds-accordion" data-gds-accordion=""> 
          <ul className="gds-accordion-list">
            <li className="gds-accordion__item gds-accordion__item--active" data-gds-accordion-item="">
              <h4 className="gds-accordion__item-title gds-accordion__item-title--sm" data-gds-accordion-title="">Careers</h4>
              <i className="gds-accordion__item-icon gds-accordion__item-icon--sm" ></i>
              <ul className="gds-accordion__child-items">
                <li className="gds-accordion__child-item -color-bg-white -p-a-4">
                  <p className="gds-text--body-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna 
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit 
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                    occaecat cupidatat non proident, sunt in culpa qui officia 
                    deserunt mollit anim id est laborum.
                  </p>
                  <hr className="-color-bd-lt-3 -m-v-3 -p-b-4" />
                    <div className="gds-flex gds-flex--justify-between">
                      <div className="gds-flex__item gds-flex__item--grow-0 -m-b-3">
                        <div className="gds-flex-item">
                          <img src={'https://picsum.photos/id/1067/250/150'} alt="placeholder" />
                        </div>
                      </div> 
                      <div className="gds-flex__item gds-flex__item--grow-0 -m-b-3">
                        <div className="gds-flex-item">
                          <img src={'https://picsum.photos/id/1067/250/150'} alt="placeholder" />
                        </div>
                      </div> 
                      <div className="gds-flex__item gds-flex__item--grow-0 -m-b-3">
                        <div className="gds-flex-item">
                          <img src={'https://picsum.photos/id/1067/250/150'} alt="placeholder" />
                        </div>
                      </div> 
                      <div className="gds-flex__item gds-flex__item--grow-0 -m-b-3">
                        <div className="gds-flex-item">
                          <img src={'https://picsum.photos/id/1067/250/150'} alt="placeholder" />
                        </div>
                      </div> 

                      <div className="gds-flex__item gds-flex__item--grow-0 -m-b-3">
                        <div className="gds-flex-item">
                         <img src={'https://picsum.photos/id/1067/250/150'} alt="placeholder" />
                        </div>
                      </div> 
                      <div className="gds-flex__item gds-flex__item--grow-0 -m-b-3">
                        <div className="gds-flex-item">
                          <img src={'https://picsum.photos/id/1067/250/150'} alt="placeholder" />
                        </div>
                      </div> 
                      <div className="gds-flex__item gds-flex__item--grow-0 -m-b-3">
                        <div className="gds-flex-item">
                          <img src={'https://picsum.photos/id/1067/250/150'} alt="placeholder" />
                        </div>
                      </div> 
                      <div className="gds-flex__item gds-flex__item--grow-0 -m-b-3">
                        <div className="gds-flex-item">
                          <img src={'https://picsum.photos/id/1067/250/150'} alt="placeholder" />
                        </div>
                      </div>                    
                    </div>
                    <hr className="-color-bd-lt-3 -m-v-3" />
                      <h6 className="gds-text--body-md -m-b-2">Terms</h6> 
                      <div className="gds-tag gds-text--body-sm">
                          accordion-item                   
                      </div>
                      <div className="gds-tag gds-text--body-sm">
                          keyword                     
                      </div>
                      <div className="gds-tag gds-text--body-sm">
                           longer keyword phrase                      
                      </div>
                      <div className="gds-tag gds-text--body-sm">
                          keyword  keyword                  
                      </div>
                      <div className="gds-tag gds-text--body-sm">
                          keyword phrase                      
                      </div>
                      <div className="gds-tag gds-text--body-sm">
                          keyword keyword keyword                     
                      </div>
                      <div className="gds-tag gds-text--body-sm">
                          keyword phrase                   
                      </div>
                      <div className="gds-tag gds-text--body-sm">
                          keyword                     
                      </div>
                      <hr className="-color-bd-lt-3 -m-v-3" />
                      <div className="gds-flex-grid__container">
                        <div className="gds-flex-grid__row">
                          <div className="gds-flex-grid__item gds-flex-grid__item--tablet-2 gds-flex-grid__item--mobile-1 gds-text--body-sm -m-b-3">
                            Apprenticeships
                          </div>
                          <div className="gds-flex-grid__item gds-flex-grid__item--tablet-2 gds-flex-grid__item--mobile-1 gds-text--body-sm -m-b-3">
                            Career Advice
                          </div>
                          <div className="gds-flex-grid__item gds-flex-grid__item--tablet-2 gds-flex-grid__item--mobile-1 gds-text--body-sm -m-b-3">
                            Career Planning 
                          </div>
                          <div className="gds-flex-grid__item gds-flex-grid__item--tablet-2 gds-flex-grid__item--mobile-1 gds-text--body-sm -m-b-3">
                            Job Search 
                          </div>
                          <div className="gds-flex-grid__item gds-flex-grid__item--tablet-2 gds-flex-grid__item--mobile-1 gds-text--body-sm -m-b-3">
                            Remote Working 
                          </div>
                          <div className="gds-flex-grid__item gds-flex-grid__item--tablet-2 gds-flex-grid__item--mobile-1 gds-text--body-sm -m-b-3">
                            Vocational Training 
                          </div>
                        </div>                      
                      </div>
                    </li>
                  </ul>
                </li>
               </ul>
              </div>


          <div className="gds-accordion -m-t-3 -color-bg-white" data-gds-accordion=""> 
            <ul className="gds-accordion-list">
              <li className="gds-accordion__item gds-accordion__item" data-gds-accordion-item="">
                <h4 className="gds-accordion__item-title gds-accordion__item-title--sm" data-gds-accordion-title="">Education</h4>
                <i className="gds-accordion__item-icon gds-accordion__item-icon--sm"></i>
              </li>
            </ul>
          </div>  

          <div className="gds-accordion -m-t-3 -color-bg-white" data-gds-accordion=""> 
            <ul className="gds-accordion-list">
              <li className="gds-accordion__item gds-accordion__item" data-gds-accordion-item="">
                <h4 className="gds-accordion__item-title gds-accordion__item-title--sm" data-gds-accordion-title="">Events and Attraction</h4>
                <i className="gds-accordion__item-icon gds-accordion__item-icon--sm"></i>
              </li>
            </ul>
          </div> 

          <div className="gds-accordion -m-t-3 -m-b-6 -color-bg-white" data-gds-accordion=""> 
            <ul className="gds-accordion-list">
              <li className="gds-accordion__item gds-accordion__item" data-gds-accordion-item="">
                <h4 className="gds-accordion__item-title gds-accordion__item-title--sm" data-gds-accordion-title="">Family and Relationships</h4>
                <i className="gds-accordion__item-icon gds-accordion__item-icon--sm"></i>
              </li>
            </ul>
          </div>
          </div>
        </Fragment>
    );
  }
} 

export default EventsAccordion;  