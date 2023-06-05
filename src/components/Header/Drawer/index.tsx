import style from './style.module.scss';
import close from '/icons/cross.svg';
import Button from '../../Button';
import ButtonIcon from '../../ButtonIcon';
import { useCallback, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import routes from '../../../routes/routes';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { selectUser } from '@/redux/user/selectors';
import UserPill from '@/components/UserPill';
import { logout } from '@/redux/user/slice';

const messages = {
  about: 'About',
  contact: 'Contact',
  signIn: 'Sign In',
  notMember: 'Not a member?',
  signUp: 'Sign up now',
  signOut: 'Sign Out',
};

interface DrawerProps {
  open: boolean;
  onClose: () => void;
  className?: string;
}

const Drawer = ({ onClose, open, className }: DrawerProps) => {
  const overlay = useRef<HTMLDivElement>(null);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

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

  const user = useAppSelector(selectUser);

  const handleLogout = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

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

        {user ? (
          user.email && (
            <>
              <UserPill email={user.email} />
              <hr className={style.divider} />
              <button className={style.signOut} onClick={handleLogout}>
                {messages.signOut}
              </button>
            </>
          )
        ) : (
          <nav className={style.signIn}>
            <Button onClick={handleLogin}>{messages.signIn}</Button>
            <p className={style.signup}>
              {messages.notMember}{' '}
              <Link to={routes.signUp}>{messages.signUp}</Link>
            </p>
          </nav>
        )}
      </div>
    </div>
  );
};

export default Drawer;
