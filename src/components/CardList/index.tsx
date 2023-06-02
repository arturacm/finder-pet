import React from 'react';
import style from './style.module.scss';
import SaveToggle from './PetCard';

const petsData = [
  {
    name: 'Baxter',
    image: '/mock/baxter.png',
    breed: 'French bulldog',
    age: 5,
    weight: 12,
    type: 'dog',
  },
  {
    name: 'Baxter',
    image: '/mock/baxter.png',
    breed: 'French bulldog',
    age: 5,
    weight: 12,
    type: 'dog',
  },
] as const;
const CardList = (): React.ReactElement => {
  const cards = petsData.map(props => <SaveToggle {...props} />);

  return <div className={style.cardList}>{cards}</div>;
};

export default CardList;
