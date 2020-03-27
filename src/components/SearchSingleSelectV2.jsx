import React, { Component } from "react";
import PropTypes from 'prop-types';


class SearchSingleSelectV2 extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      currentKey: ''
    }
    this.handleKeyPress = this.handleKeyPress.bind(this); 
  }

  render() {
    return (
      <div></div>
    )
  }
} 

export default SearchSingleSelect; 