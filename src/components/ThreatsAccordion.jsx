import React, { Fragment, Component } from "react";
import threatsData from "../constants/ThreatsData";

class ThreatsAccordion extends Component {
  constructor(props) {
    super(props)
    this.state = {
      toggle: true
    }
  }

  toggleAccordion = (e, title) => {
    this.setState({ toggle: { ...this.state.toggle, [title]: !this.state.toggle[title] } })
  }

  render() {
    const { toggle } = this.state;
    return (
      <Fragment>
        <div className="gds-layout__column--md-12 -m-t-3">
          <h1 className="gds-text--header-md">THREATS</h1>
        </div>
        <div className="gds-layout__column--lg-12 gds-layout__column--md-12 -m-v-3">
          <div className="gds-accordion gds-accordion--sm gds-accordion--white" data-gds-accordion="">
            <ul className="gds-accordion-list">
              {threatsData.map((item, index) => {
                return (
                  <li className={this.state.toggle[item.title] ? "gds-accordion__item gds-accordion__item--active" : "gds-accordion__item"} data-gds-accordion-item="">
                    <h4 className="gds-accordion__item-title gds-accordion__item-title--sm -text-tr-cap" onClick={(e) => { this.toggleAccordion(e, item.title) }} data-gds-accordion-title="">
                      {item.title}
                    </h4>
                    <i className="gds-accordion__item-icon gds-accordion__item-icon--sm -cursor--pointer" onClick={(e) => { this.toggleAccordion(e, item.title) }}></i>
                    <ul className="gds-accordion__child-items">
                      <li className="gds-accordion__child-item -color-bg-white -p-a-4">
                        <>
                          <p className="gds-text--body-sm">
                            {item.description}
                          </p>
                          <hr className="-color-bd-lt-3 -m-v-4" />
                          <div className="gds-flex gds-flex--justify-start">
                            {
                              item.images.map(eachImage => <div className="gds-flex__item -m-a-2"><img className="category-image" src={eachImage} alt="placeholder" /></div>)
                            }
                          </div>
                          <hr className="-color-bd-lt-3 -m-v-3 -p-b-2" />
                          <h6 className="gds-text--body-md -m-b-2">Terms</h6>
                          <div className="-m-b-4">
                            {
                              item.terms.map(eachTerm => <div className="gds-tag gds-text--body-sm">{eachTerm}</div>)
                            }
                          </div>
                        </>
                      </li>
                    </ul>
                  </li>

                )
              })}
            </ul>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default ThreatsAccordion; 
