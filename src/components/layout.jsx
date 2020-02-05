import React, { Fragment } from "react";
// import logo from './images/logo.png'; 
import logo from '../images/logo.png';

function Layout(props) {
    const children = props.children; 
    return (
        <Fragment>
          <header className="gds-spa-header">
          <div className="gds-layout-container">
            <img className="logo" src={logo} alt="gumgum logo"/>  
              <form>
                <input
                    type="text"
                    className="input"
                    placeholder="Search for category"
                />
                <button className="search-button">
                    Search 
                </button>
                <button className="view-all-button">
                    View All 
                </button>
             </form> 
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