import styled from 'styled-components';

const SearchForm = styled.form`
  position: relative;
  transition: 100ms all ease-in-out;

  img {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;

    &:hover {
      transform: translateY(-50%) scale(1.1);
    }
  }

  &:hover,
  &:focus-within {
    transform: scaleX(1.1);

    input {
      box-shadow: -3px 3px 10px #1b2631;
    }
  }
`;

const inputBackground = '#314050';

// TODO replace box-shadow color with theme variable (see frame styles)
const SearchInput = styled.input.attrs({ type: 'text' })`
  background: ${inputBackground};
  border: 1px solid transparent;
  border-radius: 0.5rem;
  box-shadow: -2px 2px 5px #1b2631;
  padding: 1.25rem;
  padding-right: 60px;
  font-family: inherit;
  font-size: 1.5rem;
  font-weight: 100;
  color: white;
  transition: 200ms border ease-in-out;

  &.error {
    border: 1px solid hsl(0, 50%, 50%);
  }
`;

export { SearchForm, SearchInput };
