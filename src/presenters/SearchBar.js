import React from 'react';
import '../styles/SearchBar.css';

const SearchBar = ({ searchText, handleType, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" className="search-bar" value={searchText} onChange={handleType} placeholder="..." />
    </form>
  );
};

export default SearchBar;
