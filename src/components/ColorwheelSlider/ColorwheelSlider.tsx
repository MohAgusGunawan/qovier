import Image from 'next/image';
import Slider from 'react-slick';

import styles from './ColorwheelSlider.module.css';

import ColorWheelPNG from '@/src/assets/images/color-wheel-rgb.png';
import ColorWheelPrimaryPNG from '@/src/assets/images/color-wheel-rgb-primary.png';
import ColorWheelSecondaryPNG from '@/src/assets/images/color-wheel-rgb-secondary.png';
import ColorWheelTertiaryPNG from '@/src/assets/images/color-wheel-rgb-tertiary.png';

const ColorwheelSlider = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 5000,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    pauseOnFocus: true,
    pasueOnHover: true,
  };

  return (
    <div className={styles.sliderWrapper}>
      <Slider {...settings}>
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
      </Slider>
    </div>
  );
};

export default ColorwheelSlider;
