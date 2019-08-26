import React, { Component } from 'react';
import Draggable from 'react-draggable';
import CastFrame from '../presenters/CastFrame';
import SearchBar from '../presenters/SearchBar';
import { convertToYoutubeEmbed } from '../services/url-rewriter';
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
    const url = convertToYoutubeEmbed(this.state.searchText);
    this.setState({ srcList: [...this.state.srcList, url] });
  };

  render() {
    return (
      <main>
        <SearchBar searchText={this.state.searchText} handleType={this.onSearchType} handleSubmit={this.onSearch} />
        {this.state.srcList.map((src, index) => (
          <Draggable key={`cast-frame-${index}`} handle=".frame-handle">
            <section>
              <CastFrame src={src} />
            </section>
          </Draggable>
        ))}
      </main>
    );
  }
}
