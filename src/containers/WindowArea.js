import React, { Component } from 'react';
import '../styles/WindowArea.css';
import SearchBar from '../presenters/SearchBar';

export default class WindowArea extends Component {
  render() {
    return <main><SearchBar searchText="test" /></main>;
  }
}
