import React from 'react';
import { ObjContext } from '../../Home';
import './search.scss';

function Search() {
  const { searchValue, setSearchValue } = React.useContext(ObjContext);

  return (
    <span className="searchClass">
      <svg
        className="icon"
        fill="none"
        height="48"
        viewBox="0 0 48 48"
        width="148"
        xmlns="http://www.w3.org/2000/svg">
        <rect fill="white" fillOpacity="0.01" height="48" width="48" />
        <path
          d="M21 38C30.3888 38 38 30.3888 38 21C38 11.6112 30.3888 4 21 4C11.6112 4 4 11.6112 4 21C4 30.3888 11.6112 38 21 38Z"
          fill="#2F88FF"
          stroke="black"
          strokeLinejoin="round"
          strokeWidth="4"
        />
        <path
          d="M26.6568 14.3431C25.2091 12.8954 23.2091 12 21 12C18.7909 12 16.7909 12.8954 15.3431 14.3431"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4"
        />
        <path
          d="M33.2218 33.2218L41.7071 41.7071"
          stroke="black"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4"
        />
      </svg>
      <input
        value={searchValue} //значения поиска
        onChange={(e) => setSearchValue(e.target.value)} //передает вводимый текст в поиск
        type="search"
        className="search browser-default"
        placeholder=" Поиск авто..."
      />
    </span>
  );
}

export default Search;
