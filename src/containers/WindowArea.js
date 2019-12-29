import React, { useState } from 'react';
import { connect } from 'react-redux';
import useTransform from '../hooks/useTransform';
import { useUrlValidate } from '../hooks/useUrlValidate';
import CastFrame from '../presenters/CastFrame';
import SearchBar from '../presenters/SearchBar';
import Transformable from '../presenters/Transformable';
import { generateFrame } from '../services/frame';
import { convertSourceUrl } from '../services/url-rewriter';
import { addFrame, removeFrame } from '../state/frames';
import '../styles/react-draggable.css';
import { Center, Content, Title } from '../styles/window';

// See https://github.com/mzabriskie/react-draggable/issues/358#issuecomment-500102484
const iframeFixCover = <div className="iframe-fix-cover"></div>;

function WindowArea({ frames, addFrame, removeFrame }) {
  const [input, setInput] = useState('');
  const isValidInput = useUrlValidate(input);
  const [transforming, onTransformStart, onTransformStop] = useTransform(false);

  function handleType(e) {
    setInput(e.target.value || '');
  }

  function handleSearch(e) {
    e.preventDefault();
    if (!isValidInput) {
      return;
    }
    setInput('');
    const url = convertSourceUrl(input);
    const frame = generateFrame(url);
    addFrame(frame);
  }

  return (
    <Content>
      <Center>
        <Title>Multicast</Title>
        <SearchBar searchText={input} valid={isValidInput} handleType={handleType} handleSubmit={handleSearch} />
      </Center>
      {frames.map((frame, index) => (
        <Transformable
          key={`cf-${frame.uuid}`}
          offset={index * 20}
          onTransformStart={onTransformStart}
          onTransformStop={onTransformStop}
        >
          <CastFrame src={frame.src} handleClose={() => removeFrame(frame.uuid)} />
        </Transformable>
      ))}
      {transforming && iframeFixCover}
    </Content>
  );
}

const mapStateToProps = state => ({ frames: state.frames });
export default connect(mapStateToProps, { addFrame, removeFrame })(WindowArea);
