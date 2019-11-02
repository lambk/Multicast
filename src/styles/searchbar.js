import styled from 'styled-components';

const inputBackground = '#314050';

// TODO replace box-shadow color with theme variable (see frame styles)
const TextInput = styled.input.attrs({ type: 'text' })`
  background: ${inputBackground};
  border-width: 0;
  border-radius: 0.5rem;
  box-shadow: -2px 2px 5px #1b2631;
  padding: 1.25rem;
  font-size: 1.5rem;
  font-weight: 100;
  color: white;
  transition: all 100ms ease-out;

  &:hover,
  &:focus {
    box-shadow: -3px 3px 10px #1b2631;
    padding-right: 2.25rem;
  }
`;

export { TextInput };
