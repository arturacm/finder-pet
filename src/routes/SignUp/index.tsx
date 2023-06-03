import Main from '@/components/Main';
import style from './style.module.scss';
import logo from '/full-logo-white.svg';
import arrowLeft from '/icons/arrow_left.svg';
import imageOwner from '/image_owner.svg';
import Button from '@/components/Button';
import ButtonIcon from '@/components/ButtonIcon';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';

const messages = {
  head: {
    start: '18,313,224 ',
    highlighted: 'pets ',
    end: 'for you',
  },
  body: ' A variety of images of pets from around the world for you to find and love ',
  button: 'Explore',
  imageAlt: ' pets compilation',
  imageOwnerAlt: 'Photography by John Wick',
  logoAlt: 'Logo',
  form: {
    header: 'Create an account',
    email: 'Email Address',
    name: 'Name',
    username: 'Username',
    password: 'Password',
    submit: 'Sign Up',
    termsOfService:
      'By clicking the “Sign up” button, you agree to Finder Pet Terms of Service and confirm that you have read our Privacy Policy.',
  },
};

function SignUp() {
  const navigate = useNavigate();
  const handleBack = useCallback(() => navigate(-1), [navigate]);
  return (
    <Main>
      <div className={style.container}>
        <div className={style.banner}>
          <img src={logo} alt={messages.logoAlt} />
          <div className={style.textWrapper}>
            <h1>
              {messages.head.start}
              <span>{messages.head.highlighted}</span>
              {messages.head.end}
            </h1>
            <p>{messages.body}</p>
          </div>
          <div className={style.photoCredits}>
            <img src={imageOwner} alt={messages.imageOwnerAlt} />
          </div>
        </div>
        <div className={style.formContainer}>
          <ButtonIcon
            src={arrowLeft}
            className={style.backButton}
            onClick={handleBack}
          />
          <form className={style.form}>
            <h1>{messages.form.header}</h1>
            <label htmlFor="email">{messages.form.email}</label>
            <input id="email" />
            <label htmlFor="name">{messages.form.name}</label>
            <input id="name" />
            <label htmlFor="username">{messages.form.username}</label>
            <input id="username" />
            <label htmlFor="password">{messages.form.password}</label>
            <input id="password" />
            <p>{messages.form.termsOfService}</p>
            <Button>{messages.form.submit}</Button>
          </form>
        </div>
      </div>
    </Main>
  );
}

export default SignUp;
