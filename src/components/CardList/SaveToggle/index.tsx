import React, { useCallback } from 'react';
import style from './style.module.scss';
import grayHeart from '/icons/Heart-gray.svg';
import redHeart from '/icons/Heart-red.svg';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { selectSavedPet } from '../../../redux/savedPets/selectors';
import { remove, save } from '../../../redux/savedPets/slice';

const messages = {
  iconAlt: 'heart',
  save: 'save',
};

interface SaveToggleProps {
  id: string;
}
const SaveToggle = ({ id }: SaveToggleProps): React.ReactElement => {
  const selected = useAppSelector(selectSavedPet(id));
  const dispatch = useAppDispatch();

  const handleClick = useCallback(
    () => dispatch(selected ? remove(id) : save(id)),
    [dispatch, id, selected],
  );

  return (
    <button
      className={`${style.saveToggle} ${
        selected ? style.selected : style.unselected
      }`}
      onClick={handleClick}
    >
      <img src={selected ? redHeart : grayHeart} alt={messages.iconAlt} />
      {selected && messages.save}
    </button>
  );
};

export default SaveToggle;
