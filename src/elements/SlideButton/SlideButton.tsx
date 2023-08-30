import React from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import styles from './SlideButton.module.css';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  direction: 'next' | 'prev';
}

const SlideButton = (props: Props) => {
  const { direction, ...rest } = props;

  return (
    <button
      className={styles.button}
      aria-label={`${direction} slide`}
      {...rest}
    >
      {direction === 'prev' && <IoIosArrowBack />}
      {direction === 'next' && <IoIosArrowForward />}
    </button>
  );
};

export default SlideButton;
