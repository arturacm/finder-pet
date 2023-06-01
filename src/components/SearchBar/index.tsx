import React from 'react';
import style from './style.module.scss';
import arrowDown from '/icons/arrow-down.svg';
import search from '/icons/search.svg';

const messages = {
  placeholder: 'What are you searching for?',
  options: {
    all: 'All Pets',
    dogs: 'Only Dogs',
    cats: 'Only Cats',
  },
  alt: {
    search: 'search icon',
    dropdown: 'dropdown arrow icon',
  },
};
const SearchBar = (): React.ReactElement => {
  return (
    <div className={style.searchBar}>
      <img src={search} alt={messages.alt.search} />
      <input className={style.input} placeholder={messages.placeholder} />
      <select className={style.dropdown}>
        <option>{messages.options.all}</option>
        <option>{messages.options.cats}</option>
        <option>{messages.options.dogs}</option>
      </select>
      <img
        src={arrowDown}
        className={style.arrowDown}
        alt={messages.alt.dropdown}
      />
    </div>
  );
};

export default SearchBar;
