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
            From 360 degrees divided by 12, so that each color has a hue range
            of 30 with a saturation value above 0. Neutral colors (white, gray,
            black) have a saturation value of 0 and a different brightness
            value.
          </p>
          <ColorwheelSlider />
          <p className={styles.aboutParagraph}>
            Qovier uses the RGB (Red, Green, Blue) format on the color wheel,
            resulting in different complementary colors from the traditional RYB
            (Red, Yellow, Blue) format.
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
