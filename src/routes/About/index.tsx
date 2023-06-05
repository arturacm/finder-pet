import Header from '@/components/Header';
import Main from '@/components/Main';
import petsCompilation from '/pets-compilation.png';
import style from './style.module.scss';
import Button from '@/components/Button';
import Footer from '@/components/Footer';

const messages = {
  head: 'Faucibus varius ultrices sollicitudin.',
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a suspendisse tempor praesent cursus tellus a urna, integer. Risus hendrerit tincidunt nec, tellus. Viverra habitasse felis vulputate est et egestas tortor sit vestibulum. ',
  button: 'Explore',
  imageAlt: 'pets compilation',
};

function Home() {
  return (
    <>
      <Header />
      <Main>
        <div className={style.container}>
          <div className={style.textContainer}>
            <h1>{messages.head}</h1>
            <p>{messages.body}</p>
            <Button>{messages.button}</Button>
          </div>
          <div className={style.imageWrapper}>
            <img
              src={petsCompilation}
              alt={messages.imageAlt}
              className={style.image}
            />
          </div>
        </div>
      </Main>
      <Footer />
    </>
  );
}

export default Home;
