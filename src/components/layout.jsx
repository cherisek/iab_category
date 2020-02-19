import React, { Fragment } from "react";
import { withRouter } from "react-router-dom"; 
import logo from "../images/new-logo.svg";
import Footer from "../pages/footer";

class Layout extends React.Component {
  constructor(props) {
    super(props); 
    this.handleViewAll = this.handleViewAll.bind(this); 
  } 
  handleViewAll() {
    this.props.history.push('/index');
  } 

  render() {
    return (
        <Fragment>
          <header className="gds-page-header -m-b-5">
          <div className="gds-layout-container">
            <img className="logo" src={logo} alt="gumgum logo"/> 
            <div className="gds-form-group"> 
              <div className="gds-form-group__input-group">
                <div className="gds-search-select__control -m-r-2" data-gds-search-select="single" style={{'display': 'flex', 'width': '100%'}}>
                  <input className="gds-search-select__input--sm -m-r-1" type="text" placeholder="Search for Category" style={{'flex': '1 0 8em'}}/> 
                  <button className="gds-button gds-button--xs gds-button--primary -m-r-1">Search</button>
                  <button className="gds-button gds-button--xs gds-button--primary"onClick={this.handleViewAll} >View All</button>
                </div>
              </div>
            </div>
          </div>      
          </header>
          <section className="gds-layout__row gds-flex" style={{'minHeight': '100%', 'margin': '0 auto 260px'}}>
            <div className="gds-layout__container--xs-12 footer">
              {this.props.children}
            </div>
            <div className="push" style={{'height': '50px'}}></div>
          </section>
          <Footer />
        </Fragment>
    )
  }
}

export default withRouter(Layout); 