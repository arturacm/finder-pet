import style from './style.module.scss';
import close from '/icons/cross.svg';
import Button from '../../Button';
import ButtonIcon from '../../ButtonIcon';
import { useCallback, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import routes from '../../../routes/routes';

const messages = {
  about: 'About',
  contact: 'Contact',
  signIn: 'Sign In',
  notMember: 'Not a member?',
  signUp: 'Sign up now',
};

interface DrawerProps {
  open: boolean;
  onClose: () => void;
  className?: string;
}

const Drawer = ({ onClose, open, className }: DrawerProps) => {
  const overlay = useRef<HTMLDivElement>(null);

  const navigate = useNavigate();

  const handleLogin = useCallback(() => navigate(routes.login), [navigate]);

  useEffect(() => {
    const overlayElement = overlay.current;

    if (overlayElement) {
      overlayElement.addEventListener('click', onClose);
    }

    const handleEscape = ({ key }: KeyboardEvent) => {
      if (key === 'Escape') onClose();
    };

    window.addEventListener('keypress', handleEscape);

    window.addEventListener('scroll', onClose);

    return () => {
      if (overlayElement) overlayElement.removeEventListener('click', onClose);

      window.removeEventListener('keydown', handleEscape);
      window.removeEventListener('scroll', onClose);
    };
  }, [onClose]);

  return (
    <div className={className}>
      <div
        className={`${style.overlay} ${!open ? style.vanishing : ''}`}
        ref={overlay}
      />
      <div className={`${style.drawer} ${open ? style.closing : ''}`}>
        <ButtonIcon onClick={onClose} src={close} width={40} height={40} />
        <nav className={style.info}>
          <Link to={routes.about}>{messages.about}</Link>
          <a href="#"> {messages.contact}</a>
        </nav>
        <hr className={style.divider} />
        <nav className={style.signIn}>
          <Button onClick={handleLogin}>{messages.signIn}</Button>
          <p className={style.signup}>
            {messages.notMember}{' '}
            <Link to={routes.signUp}>{messages.signUp}</Link>
          </p>
        </nav>
      </div>
    </div>
  );
};

export default Drawer;
