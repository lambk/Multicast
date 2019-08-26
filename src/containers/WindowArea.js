import React, { Component } from 'react';
import SearchBar from '../presenters/SearchBar';
import '../styles/WindowArea.css';

export default class WindowArea extends Component {
  constructor(props) {
    super(props);
    this.state = { searchText: null };
  }

  onSearchType = e => {
    this.setState({ searchText: e.target.value });
  };

  render() {
    return (
      <main>
        <SearchBar searchText={this.state.searchText} handleType={this.onSearchType} />
      </main>
    );
  }
}
