import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBar from '../presenters/SearchBar';
import TransformableFrame from '../presenters/TransformableFrame';
import { generateFrame } from '../services/frame';
import { convertToYoutubeEmbed } from '../services/url-rewriter';
import { addFrame, removeFrame } from '../state/actions/frames.actions';
import '../styles/WindowArea.css';

// See https://github.com/mzabriskie/react-draggable/issues/358#issuecomment-500102484
const iframeFixCover = <div className="iframe-fix-cover"></div>;

export class WindowArea extends Component {
  constructor(props) {
    super(props);
    this.state = { searchText: '', transforming: false };
  }

  onSearchType = e => {
    this.setState({ searchText: e.target.value || '' });
  };

  onSearch = e => {
    e.preventDefault();
    this.setState({ searchText: '' });
    const url = convertToYoutubeEmbed(this.state.searchText);
    const frame = generateFrame(url);
    this.props.addFrame(frame);
  };

  onTransformStart = () => this.setState({ transforming: true });

  onTransformStop = () => this.setState({ transforming: false });

  render() {
    return (
      <main>
        <section className="center-block">
          <h1 className="title">Multicast</h1>
          <SearchBar searchText={this.state.searchText} handleType={this.onSearchType} handleSubmit={this.onSearch} />
        </section>
        {this.props.frames.map(frame => (
          <TransformableFrame
            key={`cf-${frame.uuid}`}
            frame={frame}
            framesLength={this.props.frames.length}
            onTransformStart={this.onTransformStart}
            onTransformStop={this.onTransformStop}
            onClose={() => this.props.removeFrame(frame.uuid)}
          />
        ))}
        {this.state.transforming && iframeFixCover}
      </main>
    );
  }
}

const mapStateToProps = state => ({ frames: state.frames });

export default connect(
  mapStateToProps,
  { addFrame, removeFrame }
)(WindowArea);
