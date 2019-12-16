import React from 'react';
import { SearchForm, TextInput } from '../styles/searchbar';
import { SearchArrow } from './SearchArrow';

const SearchBar = ({ searchText, handleType, handleSubmit }) => {
  return (
    <SearchForm onSubmit={handleSubmit}>
      <TextInput type="text" className="search-bar" value={searchText} onChange={handleType} placeholder="https://" />
      <SearchArrow onClick={handleSubmit} />
    </SearchForm>
  );
};

export default SearchBar;
