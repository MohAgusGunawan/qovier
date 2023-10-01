import { ColorDetail, CustomColorType } from '@/src/types/ColorType';

import RatioBadge from '../RatioBadge/RatioBadge';

import styles from './PreviewText.module.css';

interface Props {
  primary: ColorDetail;
  secondary: ColorDetail;
  contrastRatio?: number | null;
}

const PreviewText = ({ primary, secondary, contrastRatio }: Props) => {
  return (
    <div
      className={styles.cardTypoColor}
      style={
        {
          '--first-color': `#${primary.hex}`,
          '--second-color': `#${secondary.hex}`,
        } as CustomColorType
      }
    >
      <div className={styles.cardTypoColorMain}>
        <p className={styles.cardTypoTextBold}>Puos tenetur dolorum.</p>
        <p className={styles.cardTypoText}>Eveniet sint maiores quisquam.</p>
      </div>
      <div className={styles.cardTypoColorAccent}>
        <p className={styles.cardTypoTextBold}>Puos tenetur dolorum.</p>
        <p className={styles.cardTypoText}>Eveniet sint maiores quisquam.</p>
      </div>

      {contrastRatio && <RatioBadge ratio={contrastRatio} />}
    </div>
  );
};

export default PreviewText;
