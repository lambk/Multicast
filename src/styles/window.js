import styled from 'styled-components';

const bgGradientStart = '#283747';
const bgGradientEnd = '#212f3c';
const textColor = '#bec2c7';

const Content = styled.main`
  width: 100vw;
  height: 100vh;
  background: radial-gradient(${bgGradientStart}, ${bgGradientEnd});
`;

const Center = styled.section`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

const Title = styled.h1`
  color: ${textColor};
  font-size: 2.5rem;
  font-weight: lighter;
  margin-bottom: 0.5rem;
  user-select: none;
`;

export { Content, Center, Title };
