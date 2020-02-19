import React, { Fragment, Component } from "react";

class MainContent extends Component {

  render() {
    return (
      <Fragment>
        <div className="gds-accordion" data-gds-accordion=""> 
          <ul className="gds-accordion-list">
            <li className="gds-accordion__item gds-accordion__item--active" data-gds-accordion-item="">
              <h4 className="gds-accordion__item-title" data-gds-accordion-title="">Automotive</h4>
              <i className="gds-accordion__item-icon"></i>
              <ul className="gds-accordion__child-items">
                <li className="gds-accordion__child-item -color-bg-white">
                  <div className="-p-a-3">
                    <div className="gds-flex gds-flex--justify-between">
                      <div className="gds-flex__item gds-flex__item--grow-0 -m-b-3">
                        <div className="gds-flex-item">
                          <img src={'https://picsum.photos/id/1071/250/150'} alt="placeholder" />
                        </div>
                      </div> 
                      <div className="gds-flex__item gds-flex__item--grow-0 -m-b-3">
                        <div className="gds-flex-item">
                          <img src={'https://picsum.photos/id/1071/250/150'} alt="placeholder" />
                        </div>
                      </div> 
                      <div className="gds-flex__item gds-flex__item--grow-0 -m-b-3">
                        <div className="gds-flex-item">
                          <img src={'https://picsum.photos/id/1071/250/150'} alt="placeholder" />
                        </div>
                      </div> 
                      <div className="gds-flex__item gds-flex__item--grow-0 -m-b-3">
                        <div className="gds-flex-item">
                          <img src={'https://picsum.photos/id/1071/250/150'} alt="placeholder" />
                        </div>
                      </div> 
                    </div>
                    <hr className="-color-bd-lt-3 -m-v-3" />
                      <h6 className="gds-text-header--sm -m-b-2">Keywords</h6> 
                      <div className="gds-tag">
                          This is data-gds-accordion-item keyword phrase                      
                      </div>
                      <div className="gds-tag">
                          keyword                     
                      </div>
                      <div className="gds-tag">
                          This is an even longer keyword phrase                      
                      </div>
                      <div className="gds-tag">
                          keyword  keyword                  
                      </div>
                      <div className="gds-tag">
                          keyword phrase                      
                      </div>
                      <div className="gds-tag">
                          keyword keyword keyword                     
                      </div>
                      <div className="gds-tag">
                          This is an even longer keyword phrase this is an even longer keyword phrase                    
                      </div>
                      <div className="gds-tag">
                          keyword                     
                      </div>
                  </div>
                </li>
                <li className="gds-accordion__child-item gds-accordion__item -color-bg-white">
                  <h4 className="gds-accordion__child-item-title gds-accordion__item-title">Learn More</h4>
                  <i className="gds-accordion__child-item-icon gds-accordion__item-icon"></i>
                </li>
              </ul>
            </li>
          </ul>
          </div>

          <div className="gds-accordion -m-t-3" data-gds-accordion=""> 
          <ul className="gds-accordion-list">
            <li className="gds-accordion__item gds-accordion__item" data-gds-accordion-item="">
              <h4 className="gds-accordion__item-title" data-gds-accordion-title="">Books and Literature</h4>
              <i className="gds-accordion__item-icon"></i>
            </li>
          </ul>
          </div>   
      </Fragment>  
    );
  }
} 

export default MainContent; 