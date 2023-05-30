import style from './style.module.scss';
import heartgray from '/icons/Heart-gray.svg';

const message = {
  save: 'save',
};

const FavoriteIndicator = () => {
  return (
    <div className={style.container}>
      <img src={heartgray} alt='heart' />
      <span>{message.save}</span>
    </div>
  );
};

export default FavoriteIndicator;
