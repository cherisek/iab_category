import React, { Fragment } from "react";
import logo from '../images/logo-white.svg';

function Layout(props) {
    const children = props.children; 
    return (
        <Fragment>
          <header className="gds-page-header">
          <div className="gds-layout-container">
            <img className="logo" src={logo} alt="gumgum logo"/> 
            <div className="gds-form-group"> 
              <div className="gds-form-group__input-group">
                <div className="gds-search-select__control -m-r-2" data-gds-search-select="single" style={{'display': 'flex', 'width': '100%'}}>
                  <input className="gds-search-select__input--sm -m-r-1" type="text" placeholder="Search for Category"/> 
                  <button className="gds-button gds-button--xs gds-button--primary -m-r-1">Search</button>
                  <button className="gds-button gds-button--xs gds-button--primary">View All</button>
                </div>
              </div>
            </div>
          </div>      
          </header>
          <section className="gds-persist-nav__main-content">
          <div className="gds-layout__container gds-layout__container--full-width -p-v-4">
            {children}
          </div>
          <footer className="-m-h-4">
            <div className="gds-flex gds-flex--justify-between -m-t-5">
                <p className="gds-text--body-sm">
                    Copyright © 2020 GumGum, Inc. All rights reserved.
                </p>
            </div>
          </footer>
          </section>
        </Fragment>
    )
}

export default Layout; 