import React, { Fragment, Component } from "react";
import data from "../constants/Data";
import TreeNav from "./TreeNav";
import MainContent from "./MainContent";
import NotFoundPage from "./NotFoundPage";

class Index  extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: [
        data[0].title,
      ],
      notFound: false
    }
  }

  componentWillMount() {
    const { pathname } = this.props.location
    const urlparts = pathname.split('/')
    let category = urlparts[urlparts.length - 1];
    if (category !== "index") {
      if(!data.find(each => each.title === category)) {
        return this.setState({
          notFound: true
        });
      }
      category = category.replace(/\%20/g, ' ')
      this.goTo(category)
    } 
  }

  goTo = (element, ...parents) => {
    const active = [element, ...parents];
    const category = active[active.length - 1]
    this.props.history.push(`/index/${category}`);
    this.setState({
      active
    });
  } 

  render() { 
    return (
      <Fragment>
        {
          this.state.notFound
          ? <NotFoundPage />
          : <div className="gds-persist-nav -gds-persist-nav--page-header">
              <TreeNav  data={data} goTo={this.goTo} active={this.state.active} />
              <section className="gds-persist-nav__main-content">
                <div className="gds-layout__container gds-layout__container--full-width" style={{'paddingTop': '1.5rem'}}>
                  <div className="gds-layout__row">
                    <MainContent data={data} active={this.state.active} title="Categories" />
                  </div>
                </div>
              </section>
            </div>
        }
      </Fragment>
    );
  }
} 

export default Index; 
