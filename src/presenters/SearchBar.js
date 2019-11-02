import React from 'react';
import { TextInput } from '../styles/searchbar';

const SearchBar = ({ searchText, handleType, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <TextInput type="text" className="search-bar" value={searchText} onChange={handleType} placeholder="https://" />
    </form>
  );
};

export default SearchBar;
