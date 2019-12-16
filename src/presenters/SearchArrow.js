import React from 'react';
import { Arrow } from '../styles/searchArrow';

export const SearchArrow = ({ onClick }) => {
  return <Arrow src="/arrow.png" height="30" alt="Search" onClick={onClick} />;
};
