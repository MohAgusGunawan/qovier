import IllustrationOneSVG from '@/src/svg/IllustrationOneSVG/IllustrationOneSVG';
import IllustrationTwoSVG from '@/src/svg/IllustrationTwoSVG/IllustrationTwoSVG';
import IllustrationThreeSVG from '@/src/svg/IllustrationThreeSVG/IllustrationThreeSVG';
import IllustrationFourSVG from '@/src/svg/IllustrationFourSVG/IllustrationFourSVG';

import { ColorDetail } from '@/src/types/ColorType';

import styles from './PreviewIllustration.module.css';

interface Props {
  primary: ColorDetail;
  secondary: ColorDetail;
  slideIllustration: number;
  isIllustrationSwap: boolean;
}

const PreviewIllustration = ({
  primary,
  secondary,
  slideIllustration,
  isIllustrationSwap,
}: Props) => {
  return (
    <>
      {slideIllustration === 0 && (
        <div className={styles.cardPairPreview}>
          <IllustrationOneSVG
            mainColor={isIllustrationSwap ? secondary.hex : primary.hex}
            accentColor={isIllustrationSwap ? primary.hex : secondary.hex}
          />
        </div>
      )}
      {slideIllustration === 1 && (
        <div className={styles.cardPairPreview}>
          <IllustrationTwoSVG
            mainColor={isIllustrationSwap ? secondary.hex : primary.hex}
            accentColor={isIllustrationSwap ? primary.hex : secondary.hex}
          />
        </div>
      )}
      {slideIllustration === 2 && (
        <div className={styles.cardPairPreview}>
          <IllustrationThreeSVG
            mainColor={isIllustrationSwap ? secondary.hex : primary.hex}
            accentColor={isIllustrationSwap ? primary.hex : secondary.hex}
          />
        </div>
      )}
      {slideIllustration === 3 && (
        <div className={styles.cardPairPreview}>
          <IllustrationFourSVG
            mainColor={isIllustrationSwap ? secondary.hex : primary.hex}
            accentColor={isIllustrationSwap ? primary.hex : secondary.hex}
          />
        </div>
      )}
    </>
  );
};

export default PreviewIllustration;
