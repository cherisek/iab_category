import React, { Component } from "react";
import tree from "../constants/tree";

class TreeNav extends Component {
  constructor(props) {
    super(props); 
      this.state = {
        toggle: false, 
        tree: [] 
      }; 
  }

  toggleCategory = ({ target }) => {
    const { nextSibling } = target; 
    nextSibling.style.display = nextSibling.style.display === 'block' || !nextSibling.style.display ? 'none' : 'block';
  } 


  render() { 
    return (
      <div className="gds-layout__column--lg-4 gds-layout__column--md-12">
        <div className="gds-card -pos-fix -overflow-x-scroll" style={{'height': '100%', 'minWidth': '25%' }}> 
          <div className="gds-card__block">
            {tree.map((item, index) => {
              return (
                <h6 className="gds-text--header-md -m-b-3 -m-t-4 -p-h-3 -text-tr-up">
                  {item.pageTitle}            
                </h6>
              )
            })}
              <div className="gds-form-group -m-h-3 -m-b-3">    
                <div className="gds-search-select__control" data-gds-search-select="single">
                  <input className="gds-form-group__text-input" type="text" placeholder="Search"/> 
                  <i className="gds-form-group__text-input-icon btl bt-search"></i>
                </div>
              </div>

              <ul className="-p-h-4">           
                  {tree.map((item, index) => {
                    return (
                      <li>
                      <span className="gds-tree__link gds-text--bold -text-tr-cap -cursor--pointer" onClick={this.toggleCategory}>
                        {item.category}
                      </span>
                
                  <ul className="gds-tree__sub-nav">
                      {item.childNodes.map((childNodes, index) => {
                        return (
                          <li className="gds-tree__sub-item" onClick={this.toggleCategory}>
                            <span className="gds-tree__link gds-tree__link--primary -text-tr-cap" key={index}>
                              {childNodes.title}
                            </span>
                            <ul className="gds-tree__sub-nav">
                              {childNodes.subChildNodes.map((item, index) => {
                                return (
                                  <li className="gds-tree__sub-item">
                                    {
                                      typeof item === 'string' ?
                                        <a href="/index/iab" className="gds-tree__link -text-tr-cap">
                                          {item}
                                        </a> :
                                        <>
                                          <span className="gds-tree__link gds-tree__link--primary -text-tr-cap" key={index}>
                                            {item.title}
                                          </span>
                                          <ul className="gds-tree__sub-nav">
                                            {item.grandchildNodes.map((item, index) => {
                                            return (
                                              <li className="gds-tree__sub-item">
                                                <span className="gds-tree__link -text-tr-cap">
                                                  {item}
                                                </span>
                                              </li>
                                            )
                                            })} 
                                        </ul>
                                      </>
                                    }
                                  </li>
                                )
                              })}
                            </ul>
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
    );
  }
} 

export default TreeNav; 