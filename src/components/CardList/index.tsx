import React, { useMemo } from 'react';
import style from './style.module.scss';
import PetCard from './PetCard';
import MasonryGallery from '../MasonryGallery';
import { useSearchParams } from 'react-router-dom';
import Button from '../Button';
import { z } from 'zod';

const messages = {
  button: 'Show more',
  petType: {
    cat: 'Cute cat',
    dog: 'Cute dog',
    all: 'Cute cat and dog',
  },
  noResults: 'No results found :(',
  results: 'results found on this search',
};

const queryParamSchema = z.object({
  type: z.union([z.literal('cat'), z.literal('dog'), z.literal('')]).nullable(),
  name: z.string().nullable(),
});

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
    id: 'b9a3ac2c-dd26-43ee-ae36-0c5257b58bd1',
    name: 'Tartar Sauce',
    image: 'https://itpetblog.com.br/wp-content/uploads/2019/07/grumpy-cat.jpg',
    breed: 'Grumpy',
    age: 5,
    weight: 12,
    type: 'cat',
  },
  {
    id: 'd9a9fc44-f518-48fd-8063-504b76ede907',
    name: 'Tartar Sauce',
    image: 'https://itpetblog.com.br/wp-content/uploads/2019/07/grumpy-cat.jpg',
    breed: 'Grumpy',
    age: 5,
    weight: 12,
    type: 'cat',
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
    id: 'd30b86ed-0d57-4c9d-abda-de09191b8e4d',
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
  {
    id: '70b4512f-da9d-41ac-ac0a-378645cfc692',
    name: 'Tartar Sauce',
    image: 'https://itpetblog.com.br/wp-content/uploads/2019/07/grumpy-cat.jpg',
    breed: 'Grumpy',
    age: 5,
    weight: 12,
    type: 'cat',
  },
  {
    id: 'd46fefdf-010f-44a2-8083-70274be536ab',
    name: 'Tartar Sauce',
    image: 'https://itpetblog.com.br/wp-content/uploads/2019/07/grumpy-cat.jpg',
    breed: 'Grumpy',
    age: 5,
    weight: 12,
    type: 'cat',
  },
  {
    id: 'dbef14ac-1bb6-41f1-864b-26b7c98836df',
    name: 'Baxter',
    image: '/mock/baxter.png',
    breed: 'French bulldog',
    age: 5,
    weight: 12,
    type: 'dog',
  },
] as const;

const CardList = (): React.ReactElement => {
  const [searchParam] = useSearchParams();

  const queryParam = queryParamSchema.safeParse({
    name: searchParam.get('name'),
    type: searchParam.get('type'),
  });

  const filteredCards = useMemo(
    () =>
      petsData
        .filter(
          ({ type, name, breed }) =>
            type === (searchParam.get('type') || type) &&
            `${name} ${breed}`
              .toLowerCase()
              .includes((searchParam.get('name') ?? '').toLowerCase()),
        )
        .map(props => <PetCard {...props} key={props.id} />),
    [searchParam],
  );

  const noResults = filteredCards.length === 0;
  const hasAnyParam = !searchParam.keys().next().done;

  return (
    <>
      {noResults ? (
        <h1>{messages.noResults}</h1>
      ) : (
        queryParam.success &&
        hasAnyParam && (
          <div className={style.searchResult}>
            <h1>{messages.petType[queryParam.data.type || 'all']}</h1>
            <p>
              <span>{filteredCards.length} </span>
              {messages.results}
            </p>
          </div>
        )
      )}

      <MasonryGallery
        className={style.desktop}
        elements={filteredCards}
        columns={3}
      />
      <MasonryGallery
        className={style.tablet}
        elements={filteredCards}
        columns={2}
      />
      <MasonryGallery
        className={style.mobile}
        elements={filteredCards}
        columns={1}
      />
      {!noResults && (
        <div className={style.gradientContainer}>
          <div className={style.gradient}>
            <Button>{messages.button}</Button>
          </div>
        </div>
      )}
    </>
  );
};

export default CardList;
