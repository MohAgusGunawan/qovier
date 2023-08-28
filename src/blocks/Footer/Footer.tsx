import { TbHeartFilled } from 'react-icons/tb';

import ColorwheelSlider from '@/src/components/ColorwheelSlider/ColorwheelSlider';

import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="wrapper">
        <section className={styles.about}>
          <h2 className={styles.aboutTitle}>About</h2>
          <p className={styles.aboutParagraph}>
            Qovier is an online color pair generator tool to help you choose
            beautiful color pairs for your design projects. You can also filter
            colors by hue range to get more specific color pairs.
          </p>
          <p className={styles.aboutParagraph}>
            Each color family has a hue range of 30, taken from a 360 degree
            color wheel to produce 12 color families. Dim Color has a low
            brightness value. Moderate color has a low saturation value and
            medium brightness level. Bright color has a high brightness value.
          </p>
          <ColorwheelSlider />
          <p className={styles.aboutParagraph}>
            Qovier uses the RGB (Red, Green, Blue) format on the color wheel,
            thus producing complementary colors that are different from the RYB
            (Red, Yellow, Blue) format and also the CYM (Cyan, Yellow, Magenta)
            format.
          </p>
          <p className={styles.aboutParagraph}>
            Please note, some colors may be registered as a patent by some
            companies. If you wish to use a color found here as a brand, do your
            own research. All color pairs are randomly generated based on a
            certain range. So, there is still a possibility that it will produce
            the same color.
          </p>
        </section>
      </div>
      <div className={styles.copyright}>
        <p className={styles.copyrightText}>
          <span>Made with </span> <TbHeartFilled /> <span> by </span>
          <a
            className={styles.copyrightLink}
            href="https://github.com/cholis04"
            target="_blank"
            rel="noopener noreferrer"
          >
            cholis04
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
