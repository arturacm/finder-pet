import React from 'react';
import style from './style.module.scss';
import SaveToggle from '../SaveToggle';

interface PetCardProps {
  id: string;
  image: string;
  name: string;
  breed: string;
  age: number;
  weight: number;
  type: 'dog' | 'cat';
}

const PetCard = ({
  image,
  name,
  breed,
  age,
  weight,
  type,
  id,
}: PetCardProps): React.ReactElement => {
  return (
    <div className={style.petCard}>
      <img src={image} alt={`${name} - ${breed} ${type}`} />
      <div className={style.label}>
        <h2>{name}</h2>
        <p>{`${breed}, ${age}-years-old, ${weight}kg`}</p>
      </div>
      <SaveToggle id={id} />
    </div>
  );
};

export default PetCard;
