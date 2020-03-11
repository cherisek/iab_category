import React, { Component, Fragment } from "react";
import iabTree from "../constants/IabTree";

class IabTreeNav extends Component {
  constructor(props) {
    super(props); 
      this.state = {
        toggle: false, 
        toggleArrow: false,
        tree: [] 
      }; 
  }

  toggleCategory = ({ currentTarget }) => {
    const { nextSibling } = currentTarget; 
    const newArrowStatus = { ...this.state.toggleArrow, [currentTarget.dataset.category]: !this.state.toggleArrow[currentTarget.dataset.category]}
    this.setState({ toggleArrow: newArrowStatus })
    nextSibling.style.display = nextSibling.style.display === 'block' || !nextSibling.style.display ? 'none' : 'block';
  } 

  render() { 

    return (
      <Fragment> 
      <div id="tree" className=" -overflow-x-scroll" style={{'height': '100%', 'width': '19rem'}}>
        <div className="gds-card"> 
          <div className="gds-card__block">
            {iabTree.map((item, index) => {
              return (
                <h6 className="gds-text--header-xs -m-v-3 -p-h-3 -text-tr-cap">
                  {item.pageTitle}            
                </h6>
              )
            })}
              <div className="gds-form-group -m-a-3">    
                <div className="gds-search-select__control" data-gds-search-select="single">
                  <input className="gds-form-group__text-input gds-form-group__text-input--sm" type="text" placeholder="Search"/> 
                  <i className="gds-form-group__text-input-icon gds-form-group__text-input-icon--sm btl bt-search"></i>
                </div>
              </div>

              <ul className="-p-h-4">
               
                  {iabTree.map((item, index) => {
                    return (
                      <li>
                      <span className="gds-tree__link gds-text--bold -text-tr-cap -cursor--pointer" data-category={item.category} onClick={this.toggleCategory}>
                        <i className={this.state.toggleArrow[item.category] ? "fas fa-angle-right fa-lg -color-tx-pri -m-r-3 -m-t-1" : "fas fa-angle-down fa-lg -color-tx-pri -m-r-3 -m-t-1"}></i> 
                        {item.category}
                      </span>
                
                      <ul className="gds-tree__sub-nav">
                          {item.childNodes.map((childNodes, index) => {
                            return (
                              <li className="gds-tree__sub-item">
                                <span className="gds-tree__link gds-tree__link--primary -text-tr-cap" key={index}>
                                  {childNodes.title}
                                </span>
                              </li>
                            )
                          })}           
                      </ul> 
                  </li>   
                )
              })}
              </ul>
          </div>
        </div>  
      </div>
    </Fragment>
    );
  }
} 

export default IabTreeNav; 