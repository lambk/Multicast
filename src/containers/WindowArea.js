import React, { Component } from 'react';
import Draggable from 'react-draggable';
import { connect } from 'react-redux';
import CastFrame from '../presenters/CastFrame';
import SearchBar from '../presenters/SearchBar';
import { convertToYoutubeEmbed } from '../services/url-rewriter';
import { addFrame } from '../state/actions/frames.actions';
import '../styles/WindowArea.css';

export class WindowArea extends Component {
  constructor(props) {
    super(props);
    this.state = { searchText: '' };
  }

  onSearchType = e => {
    this.setState({ searchText: e.target.value || '' });
  };

  onSearch = e => {
    e.preventDefault();
    this.setState({ searchText: '' });
    const url = convertToYoutubeEmbed(this.state.searchText);
    this.props.addFrame(url);
  };

  render() {
    return (
      <main>
        <SearchBar searchText={this.state.searchText} handleType={this.onSearchType} handleSubmit={this.onSearch} />
        {this.props.frames.map((src, index) => (
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

const mapStateToProps = state => ({ frames: state.frames });

export default connect(
  mapStateToProps,
  { addFrame }
)(WindowArea);
