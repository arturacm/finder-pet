import style from './style.module.scss';
import close from '/icons/cross.svg';
import Button from '../../Button';
import ButtonIcon from '../../ButtonIcon';
import { useEffect, useRef } from 'react';

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

  useEffect(() => {
    const overlayElement = overlay.current;

    if (overlayElement) {
      overlayElement.addEventListener('click', onClose);
    }

    const handleEscape = ({ key }: KeyboardEvent) => {
      if (key === 'Escape') onClose();
    };

    window.addEventListener('keypress', handleEscape);

    return () => {
      if (overlayElement) overlayElement.removeEventListener('click', onClose);

      window.removeEventListener('keydown', handleEscape);
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
          <a href="#">{messages.about}</a>
          <a href="#"> {messages.contact}</a>
        </nav>
        <hr className={style.divider} />
        <nav className={style.signIn}>
          <Button>{messages.signIn}</Button>
          <p className={style.signup}>
            {`${open}`}
            {messages.notMember} <a href="#">{messages.signUp}</a>
          </p>
        </nav>
      </div>
    </div>
  );
};

export default Drawer;
