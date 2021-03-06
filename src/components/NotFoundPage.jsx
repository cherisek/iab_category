import React, { Component } from "react";
import { Link } from 'react-router-dom'; 

class notFoundPage extends Component {
  render() {
    return (
      <div className="-p-a-2 gds-flex gds-flex--align-center" style={{'height': '100%'}}>
        <div className="gds-flex__item -text-center" style={{'top': '30%'}}>
          <i
              className=
              "gds-text--header-lg -color-tx-sec fa fa-fw fa-exclamation-triangle -inline-block"    
          />
          <h1 className="gds-text--header-sm">404: Page Not Found</h1>
          <p>Uh, Oh! The page you are looking for doesn't exist!</p>
          <Link to="/" className="-color-tx-pri">Go To home</Link>
        </div> 
     </div>
    )
  }
} 

export default notFoundPage; 