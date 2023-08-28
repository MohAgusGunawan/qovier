import Image from 'next/image';
import Carousel from 'nuka-carousel';

import styles from './ColorwheelSlider.module.css';

import ColorWheelPNG from '@/src/assets/images/color-wheel-rgb.png';
import ColorWheelPrimaryPNG from '@/src/assets/images/color-wheel-rgb-primary.png';
import ColorWheelSecondaryPNG from '@/src/assets/images/color-wheel-rgb-secondary.png';
import ColorWheelTertiaryPNG from '@/src/assets/images/color-wheel-rgb-tertiary.png';

const ColorwheelSlider = () => {
  const settings = {
    wrapAround: true,
    autoplay: true,
    autoplayInterval: 5000,
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
            src={ColorWheelPNG}
            alt="Color Wheel RGB Format"
            fill
            sizes="480px"
            priority
          />
        </div>

        <div className={styles.responsiveImageWrapper}>
          <Image
            src={ColorWheelPrimaryPNG}
            alt="Primary Color on Color Wheel RGB Format"
            fill
            sizes="480px"
            priority
          />
        </div>
        <div className={styles.responsiveImageWrapper}>
          <Image
            src={ColorWheelSecondaryPNG}
            alt="Secondary Color on Color Wheel RGB Format"
            fill
            sizes="480px"
            priority
          />
        </div>
        <div className={styles.responsiveImageWrapper}>
          <Image
            src={ColorWheelTertiaryPNG}
            alt="Tertiary Color on Color Wheel RGB Format"
            fill
            sizes="480px"
            priority
          />
        </div>
      </Carousel>
    </div>
  );
};

export default ColorwheelSlider;
