import React, { Fragment, Component } from "react";

class MainContent extends Component {

  render() {
    return (
      <Fragment>
        <div className="gds-flex-grid__container">
          <div className="gds-flex-grid__item">
            <h5 className="gds-text--bold -m-b-2" style={{'float': 'left'}}>Automotive</h5> 
            <i className="arrow-down"></i>
          </div>
          <div className="gds-flex-grid__container">
              {/* change padding later and do real calculations for smooth grid layout*/}
              <div className="gds-flex-grid__row" style={{'paddingRight': '0px', 'marginBottom': '0px'}}>
                <div className="gds-flex-grid__item gds-flex-grid__item--desktop-6 gds-flex-grid__item--tablet-2 gds-flex-grid__item--mobile-1 -m-b-3">
                  <div className="gds-flex-grid__item">
                    <img src={'https://picsum.photos/id/1071/250/150'} alt="placeholder" />
                  </div>
                </div> 
                <div className="gds-flex-grid__item gds-flex-grid__item--desktop-6 gds-flex-grid__item--tablet-2 gds-flex-grid__item--mobile-1 -m-b-3">
                  <div className="gds-flex-grid__item">
                    <img src={'https://picsum.photos/id/1071/250/150'} alt="placeholder" />
                  </div>
                </div> 
                <div className="gds-flex-grid__item gds-flex-grid__item--desktop-6 gds-flex-grid__item--tablet-2 gds-flex-grid__item--mobile-1 -m-b-3">
                  <div className="gds-flex-grid__item">
                    <img src={'https://picsum.photos/id/1071/250/150'} alt="placeholder" />
                  </div>
                </div> 
                <div className="gds-flex-grid__item gds-flex-grid__item--desktop-6 gds-flex-grid__item--tablet-2 gds-flex-grid__item--mobile-1 -m-b-3">
                  <div className="gds-flex-grid__item">
                    <img src={'https://picsum.photos/id/1071/250/150'} alt="placeholder" />
                  </div>
                </div> 
              </div>
            </div>
            <h6 className="gds-text-header--sm -m-b-2">Keywords</h6> 
            <div className="gds-flex-grid__row" style={{'paddingRight': '0px', 'marginBottom': '0px'}}>
                <div className="gds-flex-grid__item gds-flex-grid__item--desktop-6 gds-flex-grid__item--tablet-2 gds-flex-grid__item--mobile-1 -m-b-3">
                  <div className="gds-card gds-flex-grid__item--full-height">
                    <div className="gds-card__block -p-a-3">
                    <p>senectus et netus et malesuada</p>
                    </div>
                </div>
                </div> 
              <div className="gds-flex-grid__item gds-flex-grid__item--desktop-6 gds-flex-grid__item--tablet-2 gds-flex-grid__item--mobile-1 -m-b-3">
              <div className="gds-card gds-flex-grid__item--full-height">
                    <div className="gds-card__block -p-a-3">
                    <p>senectus et netus et malesuada</p>
                    </div>
                </div>
              </div>
              <div className="gds-flex-grid__item gds-flex-grid__item--desktop-6 gds-flex-grid__item--tablet-2 gds-flex-grid__item--mobile-1 -m-b-3">
              <div className="gds-card gds-flex-grid__item--full-height">
                    <div className="gds-card__block -p-a-3">
                    <p>senectus et netus et malesuada</p>
                    </div>
                </div>
              </div>
              <div className="gds-flex-grid__item gds-flex-grid__item--desktop-6 gds-flex-grid__item--tablet-2 gds-flex-grid__item--mobile-1 -m-b-3">
              <div className="gds-card gds-flex-grid__item--full-height">
                    <div className="gds-card__block -p-a-3">
                    <p>proin</p>
                    </div>
                </div>
              </div>
              <div className="gds-flex-grid__item gds-flex-grid__item--desktop-6 gds-flex-grid__item--tablet-2 gds-flex-grid__item--mobile-1 -m-b-3">
                <div className="gds-card gds-flex-grid__item--full-height">
                  <div className="gds-card__block -p-a-3">
                  <p>senectus et netus et malesuada</p>
                  </div>
                </div>
              </div>
              <div className="gds-flex-grid__item gds-flex-grid__item--desktop-6 gds-flex-grid__item--tablet-2 gds-flex-grid__item--mobile-1 -m-b-3">
                <div className="gds-card gds-flex-grid__item--full-height">
                  <div className="gds-card__block -p-a-3">
                    <p>senectus et netus et malesuada, senectus et netus et malesuada</p>
                  </div>
                </div>
              </div>
              </div>

              <div className="gds-flex-grid__item">
                <button className="gds-button gds-button--md gds-button--link gds-text--bold" style={{'padding': '0'}}>Learn More</button> 
              </div>

              <div className="gds-divider gds-divider--collapsible -m-b-5" data-gds-divider="a">
                <span className="gds-divider__line"></span>
              </div>

              <div className="gds-flex-grid__item -m-b-5">
                <h5 className="gds-text--bold -m-b-4" style={{'float': 'left'}}>Books and Literature</h5> 
                <i className="arrow-right"></i>
              </div>
              
              <div className="gds-divider -m-b-4" data-gds-divider="a">
              </div>

              <div className="gds-flex-grid__item -m-b-4">
                <h5 className="gds-text--bold -m-b-4" style={{'float': 'left'}}>Business and Finance</h5> 
                <i className="arrow-right"></i>
              </div>

              <div className="gds-divider gds-divider--collapsible -m-b-4" data-gds-divider="a">
              </div>

              <div className="gds-flex-grid__item">
            <h5 className="gds-text--bold -m-b-2" style={{'float': 'left'}}>Careers</h5> 
            <i className="arrow-down"></i>
          </div>
          <div className="gds-flex-grid__container">
              {/* change padding later and do real calculations for smooth grid layout*/}
              <div className="gds-flex-grid__row" style={{'paddingRight': '0px', 'marginBottom': '0px'}}>
                <div className="gds-flex-grid__item gds-flex-grid__item--desktop-6 gds-flex-grid__item--tablet-2 gds-flex-grid__item--mobile-1 -m-b-3">
                  <div className="gds-flex-grid__item">
                    <img src={'https://picsum.photos/id/1067/250/150'} alt="placeholder" />
                  </div>
                </div> 
                <div className="gds-flex-grid__item gds-flex-grid__item--desktop-6 gds-flex-grid__item--tablet-2 gds-flex-grid__item--mobile-1 -m-b-3">
                  <div className="gds-flex-grid__item">
                    <img src={'https://picsum.photos/id/1067/250/150'} alt="placeholder" />
                  </div>
                </div> 
                <div className="gds-flex-grid__item gds-flex-grid__item--desktop-6 gds-flex-grid__item--tablet-2 gds-flex-grid__item--mobile-1 -m-b-3">
                  <div className="gds-flex-grid__item">
                    <img src={'https://picsum.photos/id/1067/250/150'} alt="placeholder" />
                  </div>
                </div> 
                <div className="gds-flex-grid__item gds-flex-grid__item--desktop-6 gds-flex-grid__item--tablet-2 gds-flex-grid__item--mobile-1 -m-b-3">
                  <div className="gds-flex-grid__item">
                    <img src={'https://picsum.photos/id/1067/250/150'} alt="placeholder" />
                  </div>
                </div> 
              </div>
            </div>
            <h6 className="gds-text-header-sm -m-b-2">Keywords</h6> 
            <div className="gds-flex-grid__row" style={{'paddingRight': '0px', 'marginBottom': '0px'}}>
                <div className="gds-flex-grid__item gds-flex-grid__item--desktop-6 gds-flex-grid__item--tablet-2 gds-flex-grid__item--mobile-1 -m-b-3">
                  <div className="gds-card gds-flex-grid__item--full-height">
                    <div className="gds-card__block -p-a-3">
                    <p>senectus et netus et malesuada</p>
                    </div>
                </div>
                </div> 
              <div className="gds-flex-grid__item gds-flex-grid__item--desktop-6 gds-flex-grid__item--tablet-2 gds-flex-grid__item--mobile-1 -m-b-3">
              <div className="gds-card gds-flex-grid__item--full-height">
                    <div className="gds-card__block -p-a-3">
                    <p>senectus et netus et malesuada</p>
                    </div>
                </div>
              </div>
              <div className="gds-flex-grid__item gds-flex-grid__item--desktop-6 gds-flex-grid__item--tablet-2 gds-flex-grid__item--mobile-1 -m-b-3">
              <div className="gds-card gds-flex-grid__item--full-height">
                    <div className="gds-card__block -p-a-3">
                    <p>senectus et netus et malesuada</p>
                    </div>
                </div>
              </div>
              <div className="gds-flex-grid__item gds-flex-grid__item--desktop-6 gds-flex-grid__item--tablet-2 gds-flex-grid__item--mobile-1 -m-b-3">
              <div className="gds-card gds-flex-grid__item--full-height">
                    <div className="gds-card__block -p-a-3">
                    <p>proin</p>
                    </div>
                </div>
              </div>
              <div className="gds-flex-grid__item gds-flex-grid__item--desktop-6 gds-flex-grid__item--tablet-2 gds-flex-grid__item--mobile-1 -m-b-3">
                <div className="gds-card gds-flex-grid__item--full-height">
                  <div className="gds-card__block -p-a-3">
                  <p>senectus et netus et malesuada</p>
                  </div>
                </div>
              </div>
              <div className="gds-flex-grid__item gds-flex-grid__item--desktop-6 gds-flex-grid__item--tablet-2 gds-flex-grid__item--mobile-1 -m-b-3">
                <div className="gds-card gds-flex-grid__item--full-height">
                  <div className="gds-card__block -p-a-3">
                    <p>senectus et netus et malesuada, senectus et netus et malesuada</p>
                  </div>
                </div>
              </div>
              </div>
              <br />
              <div className="gds-flex-grid__item">
                <button className="gds-button gds-button--md gds-button--link" style={{'padding': '0'}}>Learn More</button> 
              </div>
              
              <div className="gds-divider gds-divider--collapsible -m-b-5" data-gds-divider="a">
                <span className="gds-divider__line"></span>
              </div> 

              <div className="gds-flex-grid__item -m-b-3">
                <h5 className="gds-text--bold -m-b-2" style={{'float': 'left'}}>Education</h5> 
                <i className="arrow-right"></i>
              </div>

              <div className="gds-divider -m-b-5" data-gds-divider="a">
              </div> 

              <div className="gds-flex-grid__item -m-b-3">
                <h5 className="gds-text--bold -m-b-2" style={{'float': 'left'}}>Events and Attractions</h5> 
                <i className="arrow-right"></i>
              </div>

              
          </div>  
      </Fragment>  
    );
  }
} 

export default MainContent; 