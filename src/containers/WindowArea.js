import React, { Component } from 'react';
import Draggable from 'react-draggable';
import { connect } from 'react-redux';
import { ResizableBox } from 'react-resizable';
import CastFrame from '../presenters/CastFrame';
import SearchBar from '../presenters/SearchBar';
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
          <Draggable
            key={`cf-${frame.uuid}`}
            handle=".frame-handle"
            cancel="button"
            bounds="parent"
            onStart={this.onTransformStart}
            onStop={this.onTransformStop}
            defaultPosition={{ x: this.props.frames.length * 20, y: this.props.frames.length * 20 }}
          >
            <section>
              <ResizableBox
                width={560}
                height={331}
                lockAspectRatio={true}
                onResizeStart={this.onTransformStart}
                onResizeStop={this.onTransformStop}
              >
                <CastFrame src={frame.src} handleClose={() => this.props.removeFrame(frame.uuid)} />
              </ResizableBox>
            </section>
          </Draggable>
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
