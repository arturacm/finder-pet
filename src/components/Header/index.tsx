import { useCallback, useState } from 'react';
import Drawer from './Drawer';
import FavoriteIndicator from './FavoriteIndicator';
import style from './style.module.scss';
import menu from '/icons/Menu.svg';
import mobileLogo from '/logo-small.svg';
import fullLogo from '/logo-full.svg';
import ButtonIcon from '@/components/ButtonIcon';
import { Link } from 'react-router-dom';
import routes from '@/routes/routes';

const messages = {
  intro: "let's explore your pet!",
  about: 'About',
  contact: 'Contact',
  login: 'Login',
  mobileLogo: 'Simplified logo',
  fullLogo: 'Full logo',
};

const Header = (): React.ReactElement => {
  const [open, setOpen] = useState(false);

  const handleClose = useCallback(() => setOpen(false), []);

  const handleOpen = useCallback(() => setOpen(true), []);

  return (
    <header className={style.container}>
      <nav className={style.logoContainer}>
        <ButtonIcon onClick={handleOpen} src={menu} className={style.menu} />
        <Link to={routes.home}>
          <img
            src={mobileLogo}
            alt={messages.mobileLogo}
            className={style.mobileLogo}
          />
          <img
            src={fullLogo}
            alt={messages.fullLogo}
            className={style.tablet}
          />
        </Link>
        <p className={style.tablet}>{messages.intro}</p>
        <Drawer open={open} onClose={handleClose} className={style.menu} />
      </nav>
      <nav className={style.links}>
        <nav className={style.desktopLinks}>
          <Link to={routes.about} className={style.desktopLinks}>
            {messages.about}
          </Link>
          <a href="#" className={style.desktopLinks}>
            {messages.contact}
          </a>
        </nav>
        <FavoriteIndicator />

        <Link className={style.desktopLinks} to={routes.login}>
          {messages.login}
        </Link>
      </nav>
    </header>
  );
};

export default Header;
