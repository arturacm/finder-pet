import React, { FormEventHandler, useCallback, useState } from 'react';
import style from './style.module.scss';
import arrowDown from '/icons/arrow-down.svg';
import search from '/icons/search.svg';
import { useSearchParams } from 'react-router-dom';

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

type ArtificialChangeEvent = {
  target: {
    name: string;
    value: string;
  };
};

const SearchBar = (): React.ReactElement => {
  const setSearchParams = useSearchParams()[1];
  const [input, setInput] = useState<Record<string, string>>({});

  const handleSubmit: FormEventHandler<HTMLFormElement> = useCallback(
    event => {
      event.preventDefault();
      setSearchParams(input);
    },
    [input, setSearchParams],
  );

  const handleInputChange = useCallback(
    (e: ArtificialChangeEvent) =>
      setInput(prev => ({ ...prev, [e.target.name]: e.target.value })),
    [],
  );

  return (
    <form className={style.searchBar} onSubmit={handleSubmit}>
      <img src={search} alt={messages.alt.search} />
      <input
        name="name"
        className={style.input}
        placeholder={messages.placeholder}
        onChange={handleInputChange}
      />
      <select
        name="type"
        className={style.dropdown}
        onChange={handleInputChange}
      >
        <option value="all">{messages.options.all}</option>
        <option value="cat">{messages.options.cats}</option>
        <option value="dog">{messages.options.dogs}</option>
      </select>
      <img
        src={arrowDown}
        className={style.arrowDown}
        alt={messages.alt.dropdown}
      />
    </form>
  );
};

export default SearchBar;
