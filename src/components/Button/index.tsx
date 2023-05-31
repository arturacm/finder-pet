import React from 'react';
import style from './style.module.scss';

const Button = ({ children }: React.PropsWithChildren): React.ReactElement => {
  return <button className={style.button}>{children}</button>;
};

export default Button;
