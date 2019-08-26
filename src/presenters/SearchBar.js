import React from 'react';
import '../styles/SearchBar.css';

const SearchBar = ({ searchText }) => {
  return (
    <div>
      <input type="text" className="search-bar" value={searchText} />
    </div>
  );
};

export default SearchBar;
