import React, { Component } from 'react';
import CastFrame from '../presenters/CastFrame';
import SearchBar from '../presenters/SearchBar';
import '../styles/WindowArea.css';

export default class WindowArea extends Component {
  constructor(props) {
    super(props);
    this.state = { searchText: '', srcList: [] };
  }

  onSearchType = e => {
    this.setState({ searchText: e.target.value || '' });
  };

  onSearch = e => {
    e.preventDefault();
    this.setState({ srcList: [...this.state.srcList, this.state.searchText] });
  };

  render() {
    return (
      <main>
        <SearchBar searchText={this.state.searchText} handleType={this.onSearchType} handleSubmit={this.onSearch} />
        {this.state.srcList.map((src, index) => (
          <CastFrame key={index} src={src} />
        ))}
      </main>
    );
  }
}
