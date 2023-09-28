import React, { useEffect, useState } from 'react';
import { HiOutlineLockOpen } from 'react-icons/hi';

import usePrevious from '@/src/hooks/usePrevious';

import styles from './Padlock.module.css';

interface Props {
  num: number;
}

const Padlock = ({ num }: Props) => {
  const [startAnimate, setStartAnimate] = useState(false);
  const currentLength = 6 - num;

  const prevLength = usePrevious(currentLength);

  const animationEnd = () => {
    setStartAnimate(false);
  };

  useEffect(() => {
    if (!startAnimate) {
      if (currentLength < prevLength) {
        setStartAnimate(true);
      }
    }
  }, [currentLength, prevLength, startAnimate]);

  return (
    <span
      className={`${styles.menuConserved} ${
        startAnimate ? styles.pulseAnimation : null
      }`}
      onAnimationEnd={() => animationEnd()}
      title="Unused lock"
    >
      <HiOutlineLockOpen />
      <span>{6 - num}</span>
    </span>
  );
};

export default React.memo(Padlock);
