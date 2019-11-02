import styled from 'styled-components';

const frameColor = '#1b2631';

const FrameOuter = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  box-shadow: -3px 3px 10px ${frameColor};
`;

const FrameHandle = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 1rem;
  background: ${frameColor};
  border-radius: 3px 3px 0 0;
  cursor: pointer;
`;

const CloseButton = styled.button.attrs({ type: 'button' })`
  background: transparent;
  padding: 0 0.2rem;
  border-width: 0;
  border-radius: 2px;
  outline: none;
  color: white;
  cursor: pointer;

  &:hover {
    background: rgb(128, 128, 128);
  }
`;

const FrameContent = styled.iframe`
  width: 100%;
  flex-grow: 1;
  background-image: url('/player-silhouette.svg');
  background-repeat: no-repeat;
  background-size: 100%;
`;

export { FrameOuter, FrameHandle, CloseButton, FrameContent };
