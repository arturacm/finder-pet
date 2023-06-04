import React from 'react';
import style from './style.module.scss';

const Button = ({
  children,
  className,
  ...rest
}: React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>): React.ReactElement => {
  return (
    <button className={`${style.button} ${className ?? ''}`} {...rest}>
      {children}
    </button>
  );
};

export default Button;
