import React, { Fragment, Component } from "react";

class Accordion extends Component {
  constructor(props) {
    super(props)
    this.state = {
      toggle: true
    }
  }

  toggleAccordion = (e, title) => {
    this.setState({ toggle: { ...this.state.toggle, [title]: !this.state.toggle[title] } })
  }

  componentWillMount() {
    const category = this.props.active[0]
    if (category) {
      this.setState({ toggle: {
        [category]: true
      }}, () => {
        setTimeout(() => {
          this.refs[category].scrollIntoView({block: 'start', behavior: 'smooth'});
        }, 1000)
      })
    }
  }

  componentWillReceiveProps(newProps) {
    const toggle = {}
    if (newProps.active.length === 1) {
      newProps.active.forEach((each) => {
        toggle[each] = true;
      });
    } else {
      newProps.active.slice(1).forEach((each) => {
        toggle[each] = true;
      });
    }
    
    this.setState({ toggle }, () => {
      setTimeout(() => {
        this.refs[newProps.active[0]].scrollIntoView({block: 'start', behavior: 'smooth'});
      }, 1000)
    })
  }

  componentDidMount() {
    const toggle = {
      [this.props.active[0]]: true
    }
    this.setState({ toggle }, () => {
      setTimeout(() => {
        this.refs[this.props.active[0]].scrollIntoView({block: 'start', behavior: 'smooth'});
      }, 1000)
    })
  }

  render() {
    const { toggle } = this.state;
    const { title, active, data } = this.props;
    // const current = active.length ? active[active.length - 1] : ''
    const current = active[active.length - 1]
    return (
      <Fragment>
        <div className="gds-layout__column--md-12 -m-t-3">
          <h1 className="gds-text--header-md">{title}</h1>
        </div>
        <div className="gds-layout__column--lg-12 gds-layout__column--md-12 -m-v-3">
          <div className="gds-accordion gds-accordion--white" data-gds-accordion="">
            <ul className="gds-accordion-list">
              {data.filter(each => !current || each.title === current).map((item, index) => {
                return (
                  <li className={this.state.toggle[item.title] ? "gds-accordion__item gds-accordion__item--active" : "gds-accordion__item"} data-gds-accordion-item="">
                    <h4 ref={item.title} className="gds-accordion__item-title -text-tr-cap" onClick={(e) => { this.toggleAccordion(e, item.title) }} data-gds-accordion-title="">
                      {item.title}
                    </h4>
                    <i className="gds-accordion__item-icon -cursor--pointer" onClick={(e) => { this.toggleAccordion(e, item.title) }}></i>
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
                          { item.categories && <h6 className="gds-text--body-md -m-b-2">Subcategories</h6> }
                          <div className="gds-accordion gds-accordion--white gds-accordion--sm">
                            {item.categories && item.categories.map((category, index) => {
                              return (
                               
                                  <li className={`gds-accordion__item ${toggle[category.title] ? 'gds-accordion__item--active' : ''}`} data-gds-accordion-item="">
                                    <h4 ref={category.title} className="gds-accordion__item-title  gds-accordion__item-title--sm -text-tr-cap" onClick={(e) => { this.toggleAccordion(e, category.title) }} data-gds-accordion-title="">{category.title}</h4>
                                    {category.subcategories && <i className="gds-accordion__item-icon gds-accordion__item-icon--sm -cursor--pointer" onClick={(e) => { this.toggleAccordion(e, category.title) }}></i>}
                                    <ul className="gds-accordion__child-items">
                                      {
                                        category.subcategories && category.subcategories.map(eachSub => {
                                          return (
                                            <li className={`gds-accordion__item ${toggle[eachSub.title] ? 'gds-accordion__item--active' : ''}`} data-gds-accordion-item="">
                                              <h4 ref={typeof eachSub === 'string' ? eachSub : eachSub.title} className="gds-accordion__child-item-title gds-accordion__item-title--sm -text-tr-cap -p-h-3 -p-v-2" onClick={(e) => { this.toggleAccordion(e, eachSub.title) }}>
                                                {typeof eachSub === 'string' ? eachSub : eachSub.title}
                                              </h4>
                                              {
                                                typeof eachSub !== 'string' &&
                                                <>
                                                  <i className="gds-accordion__item-icon gds-accordion__item-icon--sm -cursor--pointer" onClick={(e) => { this.toggleAccordion(e, eachSub.title) }}></i>
                                                  <ul className="gds-accordion__child-items gds-accordion--sm">
                                                    {
                                                      eachSub.grandsubcategories && eachSub.grandsubcategories.map(eachGrand => {
                                                        return (
                                                          <li className="gds-accordion__child-item" ref={eachGrand}>
                                                            <h4 className="gds-accordion__child-item-title gds-accordion__child-item-title--sm -text-tr-cap">{eachGrand}</h4>
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

export default Accordion; 
