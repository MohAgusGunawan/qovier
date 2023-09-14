import Image from 'next/image';
import Carousel from 'nuka-carousel';

import styles from './ColorHarmonySlider.module.css';

import harmonyPNG from '@/src/assets/images/color-harmony.png';
import analogusPNG from '@/src/assets/images/color-harmony-analogous.png';
import complementaryPNG from '@/src/assets/images/color-harmony-complementary.png';
import monochromaticPNG from '@/src/assets/images/color-harmony-monochromatic.png';
import splitComplementaryPNG from '@/src/assets/images/color-harmony-split-complementary.png';
import squarePNG from '@/src/assets/images/color-harmony-square.png';
import triadicPNG from '@/src/assets/images/color-harmony-triadic.png';
import tetradicPNG from '@/src/assets/images/color-harmony-tetradic.png';

const ColorHarmonySlider = () => {
  const settings = {
    wrapAround: true,
    autoplay: true,
    autoplayInterval: 7000,
    renderCenterRightControls: null,
    renderCenterLeftControls: null,
    defaultControlsConfig: {
      pagingDotsContainerClassName: styles.pagingDotsContainer,
    },
  };

  return (
    <div className={styles.sliderWrapper}>
      <Carousel {...settings}>
        <div className={styles.responsiveImageWrapper}>
          <Image
            src={harmonyPNG}
            alt="Color Harmony"
            fill
            sizes="480px"
            priority
          />
        </div>
        <div className={styles.responsiveImageWrapper}>
          <Image
            src={analogusPNG}
            alt="Color Harmony Analogous"
            fill
            sizes="480px"
            priority
          />
        </div>
        <div className={styles.responsiveImageWrapper}>
          <Image
            src={complementaryPNG}
            alt="Color Harmony Complementary"
            fill
            sizes="480px"
            priority
          />
        </div>
        <div className={styles.responsiveImageWrapper}>
          <Image
            src={monochromaticPNG}
            alt="Color Harmony Monochromatic"
            fill
            sizes="480px"
            priority
          />
        </div>
        <div className={styles.responsiveImageWrapper}>
          <Image
            src={splitComplementaryPNG}
            alt="Color Harmony Split Complementary"
            fill
            sizes="480px"
            priority
          />
        </div>
        <div className={styles.responsiveImageWrapper}>
          <Image
            src={squarePNG}
            alt="Color Harmony Split Square"
            fill
            sizes="480px"
            priority
          />
        </div>
        <div className={styles.responsiveImageWrapper}>
          <Image
            src={tetradicPNG}
            alt="Color Harmony Split Tetradic"
            fill
            sizes="480px"
            priority
          />
        </div>
        <div className={styles.responsiveImageWrapper}>
          <Image
            src={triadicPNG}
            alt="Color Harmony Split Triadic"
            fill
            sizes="480px"
            priority
          />
        </div>
      </Carousel>
    </div>
  );
};

export default ColorHarmonySlider;
