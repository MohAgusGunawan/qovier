import fontColorContrast from 'font-color-contrast';

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

  const getThemeByRatio = (number: number) => {
    if (number >= 12)
      return {
        background: 'var(--success-color)',
        color: 'var(--success-text-color',
      };

    if (number >= 2.5 && number < 12)
      return {
        background: 'var(--warning-color)',
        color: 'var(--warning-text-color',
      };

    return {
      background: 'var(--danger-color)',
      color: 'var(--danger-text-color',
    };
  };

  return (
    <span
      className={styles.ratioBadge}
      style={{
        color: getThemeByRatio(ratio).color,
        background: getThemeByRatio(ratio).background,
      }}
    >
      {getTextByRatio(ratio)}
    </span>
  );
};

export default RatioBadge;
