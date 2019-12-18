import React from 'react';
import { SearchForm, SearchInput } from '../styles/searchbar';

const SearchBar = ({ searchText, valid, handleType, handleSubmit }) => {
  const inputClass = !valid && searchText ? 'error' : '';
  return (
    <SearchForm onSubmit={handleSubmit}>
      <SearchInput type="text" className={inputClass} value={searchText} onChange={handleType} placeholder="https://" />
      {(searchText.trim() && <img src="arrow.png" alt="Search" height="30" onClick={handleSubmit} />) || null}
    </SearchForm>
  );
};

export default SearchBar;
