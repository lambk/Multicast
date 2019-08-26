import React from 'react';
import '../styles/SearchBar.css';

const SearchBar = ({ searchText, handleType }) => {
  return (
    <div>
      <input type="text" className="search-bar" value={searchText} onChange={handleType} placeholder="..." />
    </div>
  );
};

export default SearchBar;
