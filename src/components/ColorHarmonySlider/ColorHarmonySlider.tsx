import Carousel from 'nuka-carousel';

import ImageElement from '@/src/elements/ImageElement/ImageElement';

import harmonyPNG from '@/src/assets/images/color-harmony.png';
import analogusPNG from '@/src/assets/images/color-harmony-analogous.png';
import complementaryPNG from '@/src/assets/images/color-harmony-complementary.png';
import monochromaticPNG from '@/src/assets/images/color-harmony-monochromatic.png';
import splitComplementaryPNG from '@/src/assets/images/color-harmony-split-complementary.png';
import squarePNG from '@/src/assets/images/color-harmony-square.png';
import triadicPNG from '@/src/assets/images/color-harmony-triadic.png';
import tetradicPNG from '@/src/assets/images/color-harmony-tetradic.png';

import styles from './ColorHarmonySlider.module.css';

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
        <ImageElement src={harmonyPNG} alt="Color Harmony" />
        <ImageElement src={analogusPNG} alt="Color Harmony Analogous" />
        <ImageElement
          src={complementaryPNG}
          alt="Color Harmony Complementary"
        />
        <ImageElement
          src={monochromaticPNG}
          alt="Color Harmony Monochromatic"
        />
        <ImageElement
          src={splitComplementaryPNG}
          alt="Color Harmony Split Complementary"
        />
        <ImageElement src={squarePNG} alt="Color Harmony Split Square" />
        <ImageElement src={tetradicPNG} alt="Color Harmony Split Tetradic" />
        <ImageElement src={triadicPNG} alt="Color Harmony Split Triadic" />
      </Carousel>
    </div>
  );
};

export default ColorHarmonySlider;
