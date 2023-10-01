import { ColorDetail, CustomColorType } from '@/src/types/ColorType';

import styles from './PreviewPattern.module.css';

interface Props {
  primary: ColorDetail;
  secondary: ColorDetail;
  slidePattern: number;
  isPatternSwap: boolean;
}

const PreviewPattern = ({
  primary,
  secondary,
  slidePattern,
  isPatternSwap,
}: Props) => {
  return (
    <>
      {slidePattern === 0 && (
        <div
          className={styles.cardPatternZigzag}
          style={
            {
              '--first-color': `#${
                isPatternSwap ? secondary.hex : primary.hex
              }`,
              '--second-color': `#${
                isPatternSwap ? primary.hex : secondary.hex
              }`,
            } as CustomColorType
          }
        />
      )}

      {slidePattern === 1 && (
        <div
          className={styles.cardPatternWire}
          style={
            {
              '--first-color': `#${
                isPatternSwap ? secondary.hex : primary.hex
              }`,
              '--second-color': `#${
                isPatternSwap ? primary.hex : secondary.hex
              }`,
            } as CustomColorType
          }
        />
      )}

      {slidePattern === 2 && (
        <div
          className={styles.cardPatternBubbleCandy}
          style={
            {
              '--first-color': `#${
                isPatternSwap ? secondary.hex : primary.hex
              }`,
              '--second-color': `#${
                isPatternSwap ? primary.hex : secondary.hex
              }`,
            } as CustomColorType
          }
        />
      )}

      {slidePattern === 3 && (
        <div
          className={styles.cardPatternCircleWave}
          style={
            {
              '--first-color': `#${
                isPatternSwap ? secondary.hex : primary.hex
              }`,
              '--second-color': `#${
                isPatternSwap ? primary.hex : secondary.hex
              }`,
            } as CustomColorType
          }
        />
      )}
    </>
  );
};

export default PreviewPattern;
