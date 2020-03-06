import React, { Component, Fragment } from "react";
import tree from "../constants/tree";

class TreeNav extends Component {
  constructor(props) {
    super(props); 
      this.state = {
        toggle: false, 
        toggleArrow: false, 
        width: window.innerWidth, 
        tree: [] 
      }; 
    this.handleWindowSizeChange = this.handleWindowSizeChange.bind(this);
  }

  toggleCategory = ({ currentTarget }) => {
    const { nextSibling } = currentTarget; 
    const newArrowStatus = { ...this.state.toggleArrow, [currentTarget.dataset.category]: !this.state.toggleArrow[currentTarget.dataset.category]}
    this.setState({ toggleArrow: newArrowStatus })
    nextSibling.style.display = nextSibling.style.display === 'block' || !nextSibling.style.display ? 'none' : 'block';
  } 

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange); 
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange); 
  }

  handleWindowSizeChange() {
    this.setState({ width: window.innerWidth });
  }

  render() { 
    const { width } = this.state; 
    const isMobile = width <= 1000;  

    return (
      <Fragment> 
        {
          isMobile ?
          (
            "null"
          )
          : 
          (
      <div className="gds-layout__column--lg-2 gds-layout__column--md-12">
        <div className="gds-card -pos-fix -overflow-x-scroll" style={{'height': '100%', 'width': '15%', 'right': '0'}}> 
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
                      <span className="gds-tree__link gds-text--bold -text-tr-cap -cursor--pointer" data-category={item.category} onClick={this.toggleCategory}>
                        {item.category}
                        <i className={this.state.toggleArrow[item.category] ? "fas fa-caret-right fa-lg -color-tx-pri -m-l-3 -m-t-1" : "fas fa-caret-down fa-lg -color-tx-pri -m-l-3 -m-t-1"}></i> 
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
      )
     }
    </Fragment>
    );
  }
} 

export default TreeNav; 