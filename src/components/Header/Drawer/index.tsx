import style from './style.module.scss';
import close from '/icons/cross.svg';
import Button from '../../Button';
import ButtonIcon from '../../ButtonIcon';

const messages = {
  about: 'About',
  contact: 'Contact',
  signIn: 'Sign In',
  notMember: 'Not a member?',
  signUp: 'Sign up now'
}

interface DrawerProps {
  open: boolean;
  onClose: () => void;
}

const Drawer = ({ onClose, open }: DrawerProps) => {
   return (
    <div className={`${style.container} ${!open? style.vanishing: ''}` }>
      <div className={`${style.drawer} ${open? style.closing: ''}`}>
        <ButtonIcon onClick={onClose} src={close} width={40} height={40}/>
        <nav className={style.info}>
          <a href='#'>{messages.about}</a>
          <a href='#'> {messages.contact}</a>
        </nav>
        <hr className={style.divider} />
        <nav className={style.signIn}>
          <Button>{messages.signIn}</Button>
          <p className={style.signup}>{`${open}`}{messages.notMember} <a href='#'>{messages.signUp}</a></p>
        </nav>
      </div>
    </div>
  );
};

export default Drawer;
