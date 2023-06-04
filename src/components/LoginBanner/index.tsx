import Main from '@/components/Main';
import style from './style.module.scss';
import logo from '/full-logo-white.svg';
import arrowLeft from '/icons/arrow_left.svg';
import imageOwner from '/image_owner.svg';
import ButtonIcon from '@/components/ButtonIcon';
import { Link, useNavigate } from 'react-router-dom';
import { PropsWithChildren, useCallback } from 'react';
import routes from '@/routes/routes';

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
};

function LoginBanner({ children }: PropsWithChildren) {
  const navigate = useNavigate();
  const handleBack = useCallback(() => navigate(-1), [navigate]);

  return (
    <Main>
      <div className={style.container}>
        <div className={style.banner}>
          <Link to={routes.home}>
            <img src={logo} alt={messages.logoAlt} />
          </Link>
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
          {children}
        </div>
      </div>
    </Main>
  );
}

export default LoginBanner;
