import React, { Component, Fragment } from "react";
import { withRouter } from 'react-router-dom';

class TreeNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
      toggleArrow: {
        [this.props.data[0].title]: true
      },
      filteredData: this.props.data,
      foundNodes: [],
    };
  }

  toggleCategory = ({ currentTarget }) => {
    const newArrowStatus = { ...this.state.toggleArrow, [currentTarget.dataset.title]: !this.state.toggleArrow[currentTarget.dataset.title] }
    this.setState({ toggleArrow: newArrowStatus })
  }

  handleSearchChange = ({ target: { value: searchTerm } }) => {
    const { filteredData } = this.state;
    const { filteredTree, openNode, foundNodes } = this.filteredDataByTerm(searchTerm, filteredData);
    this.setState({
      filteredData: !!searchTerm
        ? filteredTree
        : this.props.data,
      toggleArrow: openNode,
      foundNodes
    });
  };

  highlight = (node) => {
    return this.state.foundNodes.includes(node.toLowerCase()) ? '-color-tx-pri' : '';
  }

  filteredDataByTerm = (term) => {
    term = term.toLowerCase();
    let openNode = {};
    let filteredTree = [];
    const foundNodes = [];
    if (term) {
      filteredTree = this.props.data.filter(item => {
        let found = false;
        if (item.title.toLowerCase().includes(term)) {
          foundNodes.push(item.title.toLowerCase())
          found = true;
        }
        if (item.categories) {
          const filterCategory = item.categories.filter(cat => {
            if (cat.title.toLowerCase().includes(term)) {
              foundNodes.push(cat.title.toLowerCase())
              openNode = { ...openNode, [item.title]: true };
              found = true;
            }
            if (cat.subcategories) {
              const filterSubCat = cat.subcategories.filter(subCat => {
                if (typeof subCat === 'string') {
                  if (subCat.toLowerCase().includes(term)) {
                    foundNodes.push(subCat.toLowerCase())
                    openNode = { ...openNode, [item.title]: true, [cat.title]: true }
                    found = true;
                  }
                } else {
                  const filteredGrandSub = subCat.grandsubcategories.filter(grand => grand.toLowerCase().includes(term))
                  if (subCat.title.toLowerCase().includes(term) || filteredGrandSub.length) {
                    openNode = { ...openNode, [item.title]: true, [cat.title]: true, [subCat.title]: true }
                    if (subCat.title.toLowerCase().includes(term)) {
                      foundNodes.push(subCat.title.toLowerCase())
                    }
                    foundNodes.concat(filteredGrandSub.map(a => a.toLowerCase))
                    found = true;
                  }
                }
              })
            }
          })
        }
        return found;
      });
    }


    return {
      filteredTree,
      openNode,
      foundNodes
    }
  };

  render() {
    const { toggleArrow, filteredData } = this.state;
    const { goTo } = this.props;
    return (
      <Fragment>
        <div id="tree" className=" -overflow-x-scroll" style={{ 'height': '100%', 'width': '20rem' }}>
          <div className="gds-card">
            <div className="gds-card__block">
              <h6 className="gds-text--header-xs -m-v-3 -p-h-3 -text-tr-cap">
                Category Browser
              </h6>
              <div className="gds-form-group -m-a-3">
                <div className="gds-search-select__control" data-gds-search-select="single">
                  <input
                    className="gds-form-group__text-input gds-form-group__text-input--sm"
                    type="text"
                    placeholder="Search Categories"
                    onChange={this.handleSearchChange}
                  />
                  <i className="gds-form-group__text-input-icon gds-form-group__text-input-icon--sm btl bt-search"></i>
                </div>
              </div>

              <ul className="-p-h-4">
                {filteredData.map((item, index) => {
                  return (
                    <li>
                      <span onClick={(e) =>
                        item.categories
                          ? this.toggleCategory(e)
                          : goTo(item.title)
                      }
                        className={`gds-tree__link gds-text--bold -text-tr-cap -cursor--pointer ${this.highlight(item.title)}`}
                        data-title={item.title}
                      >
                        {
                          item.categories && <i className={!toggleArrow[item.title] ? "fas fa-angle-right fa-lg -color-tx-pri -m-r-3 -m-t-1" : "fas fa-angle-down fa-lg -color-tx-pri -m-r-3 -m-t-1"}></i>
                        }
                        {item.title}
                      </span>
                      <ul className={`gds-tree__sub-nav ${toggleArrow[item.title] ? '' : '-none'}`}>
                        {item.categories && item.categories.map((category, index) => {
                          return (
                            category.subcategories
                              ? <>
                                <span className={`gds-tree__link -text-tr-cap -cursor--pointer ${this.highlight(category.title)}`} data-title={category.title} onClick={this.toggleCategory} style={{ 'fontSize': '0.64rem' }}>
                                  <i className={!toggleArrow[category.title] ? "fas fa-angle-right fa-lg -color-tx-pri -m-r-3 -m-t-1" : "fas fa-angle-down fa-lg -color-tx-pri -m-r-3 -m-t-1"}></i>
                                  {category.title}
                                </span>
                                <ul className={`gds-tree__sub-nav ${toggleArrow[category.title] ? '' : '-none'}`}>
                                  {category.subcategories.map((subCat, index) => {
                                    return (
                                      typeof subCat !== 'string'
                                        ? <>
                                          <span className={`gds-tree__link -text-tr-cap -cursor--pointer ${this.highlight(subCat.title)}`} data-title={subCat.title} onClick={this.toggleCategory} style={{ 'fontSize': '0.64rem' }}>
                                            <i className={!toggleArrow[subCat.title] ? "fas fa-angle-right fa-lg -color-tx-pri -m-r-3 -m-t-1" : "fas fa-angle-down fa-lg -color-tx-pri -m-r-3 -m-t-1"}></i>
                                            {subCat.title}
                                          </span>
                                          <ul className={`gds-tree__sub-nav ${toggleArrow[subCat.title] ? '' : '-none'}`}>
                                            {subCat.grandsubcategories && subCat.grandsubcategories.map((grandSubCat, index) => {
                                              return (
                                                <li className="gds-tree__sub-item">
                                                  <span className={`gds-tree__link -text-tr-cap ${this.highlight(grandSubCat)}`} onClick={(e) => goTo(grandSubCat, subCat.title, category.title, item.title)} style={{ 'fontSize': '0.64rem' }}>
                                                    {grandSubCat}
                                                  </span>
                                                </li>
                                              )
                                            })}
                                          </ul>
                                        </>
                                        : <li className="gds-tree__sub-item">
                                          <span className={`gds-tree__link -text-tr-cap ${this.highlight(subCat)}`} onClick={(e) => goTo(subCat, category.title, item.title)} style={{ 'fontSize': '0.64rem' }}>
                                            {subCat}
                                          </span>
                                        </li>
                                    )
                                  })}
                                </ul>
                              </>
                              : <li className="gds-tree__sub-item">
                                <span className={`gds-tree__link gds-tree__link--primary -text-tr-cap ${this.highlight(category.title)}`} key={index} onClick={(e) => goTo(category.title, item.title)} style={{ 'fontSize': '0.64rem' }}>
                                  {category.title}
                                </span>
                              </li>
                          )
                        })}
                      </ul>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default withRouter(TreeNav); 