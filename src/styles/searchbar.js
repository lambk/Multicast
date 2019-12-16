import styled from 'styled-components';

const SearchForm = styled.form`
  position: relative;

  &:hover input,
  &:focus input {
    box-shadow: -3px 3px 10px #1b2631;
    padding-right: 2.25rem;
  }
`;

const inputBackground = '#314050';

// TODO replace box-shadow color with theme variable (see frame styles)
const TextInput = styled.input.attrs({ type: 'text' })`
  background: ${inputBackground};
  border-width: 0;
  border-radius: 0.5rem;
  box-shadow: -2px 2px 5px #1b2631;
  padding: 1.25rem;
  font-family: inherit;
  font-size: 1.5rem;
  font-weight: 100;
  color: white;
  transition: 100ms all ease-in-out;
`;

export { SearchForm, TextInput };
