import React, { Fragment, Component } from "react";
import iabData from "../constants/IabData";

class IabAccordion extends Component {
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
          <h1 className="gds-text--header-md">IAB Categories</h1>
        </div>
        <div className="gds-layout__column--lg-12 gds-layout__column--md-12 -m-v-3">
          <div className="gds-accordion gds-accordion--sm  gds-accordion--white" data-gds-accordion="">
            <ul className="gds-accordion-list">
              {iabData.map((item, index) => {
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
                          <h6 className="gds-text--body-md -m-b-2">Subcategories</h6>
                          <div className="gds-accordion gds-accordion--white gds-accordion--sm">
                            {item.categories && item.categories.map((category, index) => {
                              return (
                                <ul className="gds-accordion-list">
                                  <li className={`gds-accordion__item ${toggle[category.title] ? 'gds-accordion__item--active' : ''}`} data-gds-accordion-item="">
                                    <h4 className="gds-accordion__item-title  gds-accordion__item-title--sm -text-tr-cap" onClick={(e) => { this.toggleAccordion(e, category.title) }} data-gds-accordion-title="">{category.title}</h4>
                                    {category.subcategories && <i className="gds-accordion__item-icon gds-accordion__item-icon--sm -cursor--pointer"></i>}
                                    <ul className="gds-accordion__child-items">
                                      {
                                        category.subcategories && category.subcategories.map(eachSub => {
                                          return (
                                            <li className={`gds-accordion__item ${toggle[eachSub.title] ? 'gds-accordion__item--active' : ''}`} data-gds-accordion-item="">
                                              <h4 className="gds-accordion__child-item-title gds-accordion__item-title--sm -text-tr-cap -p-h-3 -p-v-2" onClick={(e) => { this.toggleAccordion(e, eachSub.title) }}>
                                                {typeof eachSub === 'string' ? eachSub : eachSub.title}
                                              </h4>
                                              {
                                                typeof eachSub !== 'string' &&
                                                <>
                                                  <i className="gds-accordion__item-icon gds-accordion__item-icon--sm -cursor--pointer" onClick={(e) => { this.toggleAccordion(e, eachSub.title)}}></i>
                                                  <ul className="gds-accordion__child-items">
                                                    {
                                                      eachSub.grandsubcategories && eachSub.grandsubcategories.map(eachGrand => {
                                                        return (
                                                          <li className="gds-accordion__child-item">
                                                            <h4 className="gds-accordion__child-item-title">{eachGrand}</h4>
                                                          </li>
                                                        )
                                                      })
                                                    }

                                                  </ul>
                                                </>
                                              }
                                            </li>
                                          )
                                        })
                                      }

                                    </ul>
                                  </li>
                                </ul>
                              )
                            })}
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

export default IabAccordion; 
