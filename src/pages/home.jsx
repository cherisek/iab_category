import React from "react"; 
import Layout from "../components/layout"; 

class Home extends React.Component {
  render() {
    return (
        <Layout>
            <div className="gds-flex-grid__container -m-b-3">
              <h1 className="gds-text--header-xs gds-text--bold -text-center -m-b-3">About Iab</h1>
              <p className="gds-text--body-md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="gds-layout__row -m-r-2">
              <div className="gds-flex-grid__row">
                <h1 className="gds-text--header-xs gds-text--bold -m-b-3">About GumGum Events</h1>
                <p className="gds-text--body-md">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                  occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
              <div className="gds-flex-grid__row">
                <h1 className="gds-text--header-xs gds-text--bold -m-b-3">About GumGum Threats</h1>
                <p className="gds-text--body-md">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                  occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
            </div>
        </Layout>
    );
  }
}

export default Home;