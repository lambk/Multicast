import React, { Component } from 'react';
import Draggable from 'react-draggable';
import { connect } from 'react-redux';
import CastFrame from '../presenters/CastFrame';
import SearchBar from '../presenters/SearchBar';
import { convertToYoutubeEmbed } from '../services/url-rewriter';
import { addFrame } from '../state/actions/frames.actions';
import '../styles/WindowArea.css';

// See https://github.com/mzabriskie/react-draggable/issues/358#issuecomment-500102484
const iframeFixCover = <div className="iframe-fix-cover"></div>;

export class WindowArea extends Component {
  constructor(props) {
    super(props);
    this.state = { searchText: '', dragging: false };
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

  onDragStart = () => this.setState({ dragging: true });

  onDragStop = () => this.setState({ dragging: false });

  render() {
    return (
      <main>
        <section className="center-block">
          <h1 className="title">Multicast</h1>
          <SearchBar searchText={this.state.searchText} handleType={this.onSearchType} handleSubmit={this.onSearch} />
        </section>
        {this.props.frames.map((src, index) => (
          <Draggable
            key={`cast-frame-${index}`}
            handle=".frame-handle"
            bounds="parent"
            onStart={this.onDragStart}
            onStop={this.onDragStop}
          >
            <section className="cast-frame-wrapper">
              <CastFrame src={src} />
            </section>
          </Draggable>
        ))}
        {this.state.dragging && iframeFixCover}
      </main>
    );
  }
}

const mapStateToProps = state => ({ frames: state.frames });

export default connect(
  mapStateToProps,
  { addFrame }
)(WindowArea);
