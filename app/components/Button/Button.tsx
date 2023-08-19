import React from 'react';

import styles from './Button.module.css';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  icon?: React.ReactElement;
}

const Button = (props: Props) => {
  const { children, icon, ...rest } = props;

  return (
    <button className={styles.buttonPrimary} {...rest}>
      <span>{children}</span>
      {icon}
    </button>
  );
};

export default Button;
