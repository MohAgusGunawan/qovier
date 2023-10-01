import { ColorDetail, CustomColorType } from '@/src/types/ColorType';

import styles from './PreviewGradient.module.css';

interface Props {
  primary: ColorDetail;
  secondary: ColorDetail;
  slideGradient: number;
  isGradientSwap: boolean;
}

const PreviewGradient = ({
  primary,
  secondary,
  slideGradient,
  isGradientSwap,
}: Props) => {
  return (
    <>
      {slideGradient === 0 && (
        <div
          className={styles.cardLinearGradient}
          style={
            {
              '--first-color': `#${
                isGradientSwap ? secondary.hex : primary.hex
              }`,
              '--second-color': `#${
                isGradientSwap ? primary.hex : secondary.hex
              }`,
            } as CustomColorType
          }
        />
      )}

      {slideGradient === 1 && (
        <div
          className={styles.cardRadialGradient}
          style={
            {
              '--first-color': `#${
                isGradientSwap ? secondary.hex : primary.hex
              }`,
              '--second-color': `#${
                isGradientSwap ? primary.hex : secondary.hex
              }`,
            } as CustomColorType
          }
        />
      )}

      {slideGradient === 2 && (
        <div
          className={styles.cardLinearGradientRepeat}
          style={
            {
              '--first-color': `#${
                isGradientSwap ? secondary.hex : primary.hex
              }`,
              '--second-color': `#${
                isGradientSwap ? primary.hex : secondary.hex
              }`,
            } as CustomColorType
          }
        />
      )}

      {slideGradient === 3 && (
        <div
          className={styles.cardConicGradient}
          style={
            {
              '--first-color': `#${
                isGradientSwap ? secondary.hex : primary.hex
              }`,
              '--second-color': `#${
                isGradientSwap ? primary.hex : secondary.hex
              }`,
            } as CustomColorType
          }
        />
      )}
    </>
  );
};

export default PreviewGradient;
