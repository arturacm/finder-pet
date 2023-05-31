import React from 'react';
import style from './style.module.scss';

interface ButtonIcon
  extends React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
    onClick: ()=>void;
  }

const ButtonIcon = ({ onClick, ...rest }: ButtonIcon): React.ReactElement => {
  return (
    <button className={style.buttonIcon} onClick={onClick}>
      <img {...rest}/>
    </button>
  );
};

export default ButtonIcon;
