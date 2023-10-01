import Carousel from 'nuka-carousel';

import ImageElement from '@/src/elements/ImageElement/ImageElement';

import ColorWheelPNG from '@/src/assets/images/color-wheel-rgb.png';
import ColorWheelPrimaryPNG from '@/src/assets/images/color-wheel-rgb-primary.png';
import ColorWheelSecondaryPNG from '@/src/assets/images/color-wheel-rgb-secondary.png';
import ColorWheelTertiaryPNG from '@/src/assets/images/color-wheel-rgb-tertiary.png';

import styles from './ColorwheelSlider.module.css';

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
        <ImageElement src={ColorWheelPNG} alt="Color Wheel RGB Format" />
        <ImageElement
          src={ColorWheelPrimaryPNG}
          alt="Primary Color on Color Wheel RGB Format"
        />
        <ImageElement
          src={ColorWheelSecondaryPNG}
          alt="Secondary Color on Color Wheel RGB Format"
        />
        <ImageElement
          src={ColorWheelTertiaryPNG}
          alt="Tertiary Color on Color Wheel RGB Format"
        />
      </Carousel>
    </div>
  );
};

export default ColorwheelSlider;
