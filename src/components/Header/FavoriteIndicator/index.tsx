import { useAppSelector } from '@/redux/hooks';
import { selectSavedPetsQuantity } from '@/redux/savedPets/selectors';
import style from './style.module.scss';
import heartgray from '/icons/Heart-gray.svg';
import heartred from '/icons/Heart-red.svg';

const message = {
  save: 'save',
  pets: 'pets',
  pet: 'pet',
};

const FavoriteIndicator = () => {
  const savedPetsQuantity = useAppSelector(selectSavedPetsQuantity);
  const displayQuantity = savedPetsQuantity > 0;

  return (
    <div
      className={`${style.favoriteIndicator} ${
        displayQuantity ? style.displayQuantity : ''
      }`}
    >
      <img src={displayQuantity ? heartred : heartgray} alt="heart" />
      <span>
        {displayQuantity
          ? `${savedPetsQuantity} ${
              savedPetsQuantity === 1 ? message.pet : message.pets
            }`
          : message.save}
      </span>
    </div>
  );
};

export default FavoriteIndicator;
