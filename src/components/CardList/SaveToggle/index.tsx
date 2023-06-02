import React, { useCallback, useState } from 'react';
import style from './style.module.scss';
import grayHeart from '/icons/Heart-gray.svg';
import redHeart from '/icons/Heart-red.svg';

const messages = {
  iconAlt: 'heart',
  save: 'save'
}

const SaveToggle = (): React.ReactElement => {
  const [selected, setSelected] = useState(false);

  const handleClick = useCallback(() => setSelected(prev => !prev), []);

  return  (
    <button className={`${style.saveToggle} ${selected ? style.selected : style.unselected}`} onClick={handleClick}>
      <img src={selected? redHeart: grayHeart} alt={messages.iconAlt}/>
      {selected && messages.save}
    </button>
  );
};

export default SaveToggle;
