import React from 'react';
import style from './style.module.scss';
import PetCard from './PetCard';

const petsData = [
  {
    id: '9dbdab4f-93ef-4af7-b496-01c19378b580',
    name: 'Joshua',
    image: '/mock/baxter.png',
    breed: 'Golden Retriever',
    age: 5,
    weight: 12,
    type: 'dog',
  },
  {
    id: '5ec10d78-402c-4347-9210-bcf6e6049d11',
    name: 'Baxter',
    image: '/mock/baxter.png',
    breed: 'French bulldog',
    age: 5,
    weight: 12,
    type: 'dog',
  },
  {
    id: '18c148f0-c097-4310-a4cd-a4dce09a7612',
    name: 'Tartar Sauce',
    image: 'https://itpetblog.com.br/wp-content/uploads/2019/07/grumpy-cat.jpg',
    breed: 'Grumpy',
    age: 5,
    weight: 12,
    type: 'cat',
  },
] as const;
const CardList = (): React.ReactElement => {
  const cards = petsData.map(({ id, ...props }) => (
    <PetCard {...props} key={id} />
  ));

  return <div className={style.cardList}>{cards}</div>;
};

export default CardList;
