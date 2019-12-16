import styled from 'styled-components';

const Arrow = styled.img`
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;

  &:hover {
    transform: translateY(-50%) scale(1.1);
  }
`;

export { Arrow };
