import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';

import styles from './RatioBadge.module.css';

interface Props {
  ratio: number;
}

const RatioBadge = ({ ratio }: Props) => {
  const getTextByRatio = (number: number) => {
    if (number >= 15) return 'Excellent';
    if (number >= 12 && number < 15) return 'Great';
    if (number >= 4 && number < 12) return 'Good';
    if (number >= 2.5 && number < 4) return 'Fine';
    if (number >= 1.5 && number < 2.5) return 'Poor';
    return 'Bad';
  };

  return (
    <div className={styles.ratioBadge}>
      <span className={styles.badgeText}>{getTextByRatio(ratio)}</span>
      {ratio >= 12 && (
        <BsStarFill
          className={styles.icon}
          style={{
            color: 'var(--success-color)',
          }}
        />
      )}

      {ratio >= 2.5 && ratio < 12 && (
        <BsStarHalf
          className={styles.icon}
          style={{
            color: 'var(--warning-color)',
          }}
        />
      )}

      {ratio < 2.5 && (
        <BsStar
          className={styles.icon}
          style={{
            color: 'var(--danger-color)',
          }}
        />
      )}
    </div>
  );
};

export default RatioBadge;
