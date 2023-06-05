import style from './style.module.scss';

const messages = {
  petsForYou: {
    start: '18,313,224 ',
    highlighted: 'pets ',
    end: 'for you',
  },
  social: {
    fb: 'FaceBook',
    inst: 'Instagram',
    twt: 'Twitter',
  },
  rights: '© 2022 All rights reserved.',
  tags: [
    '#puppies',
    '#catlovers',
    '#kitten',
    '#doglovers',
    '#meow',
    '#puppylove',
  ],
};

const tags = messages.tags.map(el => <span key={el}>{el}</span>);

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.top}>
        <nav className={style.tags}>{tags}</nav>
        <nav className={style.social}>
          <a href="#">{messages.social.fb}</a>
          <a href="#">{messages.social.inst}</a>
          <a href="#">{messages.social.twt}</a>
        </nav>
      </div>
      <div className={style.bottom}>
        <h1 className={style.petsCount}>
          {messages.petsForYou.start}
          <span>{messages.petsForYou.highlighted}</span>
          {messages.petsForYou.end}
        </h1>
        <span>{messages.rights}</span>
      </div>
    </footer>
  );
};

export default Footer;
