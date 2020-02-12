import React from "react"; 

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="gds-layout__column--xs-12" style={{'textAlign': 'center'}}>
            <p className="gds-text--body-sm">
                Copyright © 2020 GumGum, Inc. All rights reserved.
            </p>
        </div>
      </footer>
    );
  }
}

export default Footer; 