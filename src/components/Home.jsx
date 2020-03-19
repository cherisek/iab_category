import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";
import logo from "../images/new-logo-v2.svg";
import jumboImage from "../images/jumbotron_image.jpg";
import IabData from "../constants/IabData";
import EventsData from "../constants/EventsData";
import ThreatsData from "../constants/ThreatsData";

class Header extends React.Component {
  constructor(props) {
    super(props);
    const allOptions = IabData.map(each => ({text: each.title, type: "iab"}))
                        .concat(EventsData.map(each => ({ text: each.title, type: "events" })),
                          ThreatsData.map(each => ({ text: each.title, type: "threats" })));
    
    allOptions.sort((a, b) => {
      if (a.text < b.text) {
        return -1;
      }
      if (a.text > b.text) {
        return 1;
      }
    })
    this.state = {
      searchValue: "",
      iabDate: [],
      allOptions,
      filteredOptions: allOptions,
    }
    this.handleViewAll = this.handleViewAll.bind(this);
  }

  handleViewAll() {
    this.props.history.push('/index/iab');
  }

  handleOnChange = ({ target: { dataset } }) => {
    this.setState({
      searchValue: dataset.type ? dataset.value : '',
      type: dataset.type,
    }, () => {
      if (dataset.type) {
        this.props.history.push(`/index/${dataset.type}?q=${dataset.value.toLowerCase()}`)
      }
    })
  };

  openOption = () => {
    this.setState({
      isOptionOpen: true
    })
  }

  closeOption = ({ target }) => {
    if (target.tagName !== 'INPUT') {
      this.setState({
        isOptionOpen: false
      })
    }
  }

  filterOptions = ({ target }) => {
    const searchValue = target.value;
    if (searchValue) {
      let filteredOptions = this.state.allOptions.filter(each => each.text.includes(searchValue));
      if (!filteredOptions.length) {
        filteredOptions = [{ text: 'No option' }]
      }
      this.setState({
        filteredOptions,
        searchValue
      });
    } else {
      this.setState({
        filteredOptions: this.state.allOptions,
        searchValue: ""
      });
    }
  }

  submitForm = (e) => {
    e.preventDefault()
    const { searchValue, type } = this.state;
    if (type) {
      this.props.history.push(`/index/${type}?q=${searchValue.toLowerCase()}`)
    }
  }

  render() {
    const { isOptionOpen, filteredOptions, searchValue } = this.state;
    return (
      <div onClick={this.closeOption}>
        <div className="-color-bg-lt-3 -color-bd-lt-3" style={{ 'backgroundImage': `url(${jumboImage})`, 'backgroundPosition': 'center center', 'backgroundSize': 'cover' }}>
          <header className="-m-b-6 -flex">
            <img className="logo -m-b-5" src={logo} alt="gumgum logo" />
            <form class="gds-form -m-b-5 -p-h-4" onSubmit={this.submitForm}>
              <div class="gds-form-group" data-gds-form-group="">           
                <div className={`gds-search-select ${isOptionOpen ? 'gds-search-select--open' : ''}`} data-gds-search-select="single" data-gds-search-select-size="md">
                  <div class="gds-search-select__control" data-gds-search-select-control="">
                    <input onFocus={this.openOption} onChange={this.filterOptions} id="searcchselect-input-0" type="text" placeholder="Search Categories..." value={searchValue} className="gds-search-select__input--sm gds-search-select__input--has-tag-sm" data-gds-search-select-input autocomplete="off" />
                    <i onClick={this.submitForm} className="btl bt-search search-icon -color-tx-lt-4" style={{ 'position': 'absolute', 'top': '.6rem', 'right': '10px' }}></i>
                  </div>
                  <div class="gds-search-select__menu" data-gds-search-select-menu="">
                    <ul class="gds-search-select__menu-items" data-gds-search-select-list="">
                    {
                      filteredOptions.map(each => <li onClick={this.handleOnChange} class="gds-search-select__menu-item -text-tr-cap" data-gds-search-select-item={each} data-type={each.type} data-value={each.text}>{ each.text }</li>)
                    }
                    </ul>
                  </div>
                </div>
              </div>
            </form>
              <button className="gds-button gds-button--xs gds-button--white" style={{ 'margin': '0 auto' }} onClick={this.handleViewAll}>View All</button>
          </header>
        </div>
        <div className="gds-layout__container">
          <div className="gds-layout__row">
            <div className="gds-layout__column--lg-4 gds-layout__column--md-4 -p-h-4 -m-b-4">
              <h1 className="gds-text--header-xs gds-text--bold -text-center -m-b-3">About IAB</h1>
              <p className="gds-text--body-md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="gds-layout__column--lg-4 gds-layout__column--md-4 -p-h-4 -m-b-4">
              <h1 className="gds-text--header-xs gds-text--bold -m-b-3 -text-center">About GumGum Events</h1>
              <p className="gds-text--body-md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
            <div className="gds-layout__column--lg-4 gds-layout__column--md-4 -m-b-4 -p-h-4">
              <h1 className="gds-text--header-xs gds-text--bold -m-b-3 -text-center">About GumGum Threats</h1>
              <p className="gds-text--body-md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Header); 
