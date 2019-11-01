import React, { Component } from 'react';
import { connect } from 'react-redux';
import CastFrame from '../presenters/CastFrame';
import SearchBar from '../presenters/SearchBar';
import Transformable from '../presenters/Transformable';
import { generateFrame } from '../services/frame';
import { convertSourceUrl } from '../services/url-rewriter';
import { addFrame, removeFrame } from '../state/actions/frames.actions';
import '../styles/react-draggable.css';
import { Center, Content, Title } from '../styles/window';

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
    const url = convertSourceUrl(this.state.searchText);
    const frame = generateFrame(url);
    this.props.addFrame(frame);
  };

  onTransformStart = () => this.setState({ transforming: true });

  onTransformStop = () => this.setState({ transforming: false });

  render() {
    return (
      <Content>
        <Center>
          <Title>Multicast</Title>
          <SearchBar searchText={this.state.searchText} handleType={this.onSearchType} handleSubmit={this.onSearch} />
        </Center>
        {this.props.frames.map((frame, index) => (
          <Transformable
            key={`cf-${frame.uuid}`}
            offset={index * 20}
            onTransformStart={this.onTransformStart}
            onTransformStop={this.onTransformStop}
          >
            <CastFrame src={frame.src} handleClose={() => this.props.removeFrame(frame.uuid)} />
          </Transformable>
        ))}
        {this.state.transforming && iframeFixCover}
      </Content>
    );
  }
}

const mapStateToProps = state => ({ frames: state.frames });

export default connect(
  mapStateToProps,
  { addFrame, removeFrame }
)(WindowArea);
