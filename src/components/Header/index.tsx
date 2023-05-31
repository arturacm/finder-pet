import { useCallback, useState } from 'react';
import Drawer from './Drawer';
import FavoriteIndicator from './FavoriteIndicator';
import style from './style.module.scss';
import menu from '/icons/Menu.svg';
import logo from '/logo-small.svg';
import ButtonIcon from '../ButtonIcon';

const Header = (): React.ReactElement => {
  const [open, setOpen] = useState(false);

  const handleClose = useCallback(() => setOpen(false), []);

  const handleOpen = useCallback(() => setOpen(true), []);

  return (
    <header className={style.container}>
      <nav className={style.logoContainer}>
        <ButtonIcon onClick={handleOpen} src={menu} />
        <img src={logo} />
        <Drawer open={open} onClose={handleClose} />
      </nav>
      <nav className={style.links}>
        <FavoriteIndicator />
      </nav>
    </header>
  );
};

export default Header;
