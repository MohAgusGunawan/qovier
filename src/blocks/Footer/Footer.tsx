import Link from 'next/link';
import { TbHeartFilled } from 'react-icons/tb';
import { HiChevronDoubleUp } from 'react-icons/hi2';

import ColorwheelSlider from '@/src/components/ColorwheelSlider/ColorwheelSlider';
import ColorHarmonySlider from '@/src/components/ColorHarmonySlider/ColorHarmonySlider';

import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="wrapper">
        <section className={styles.about}>
          <h2 className={styles.aboutTitle}>About</h2>
          <p className={styles.aboutParagraph}>
            Qovier is an online color pair generator tool that assists you in
            selecting stunning color combinations for your design projects. You
            can refine your color choices by filtering them according to the hue
            range, providing you with even more precise color pairs. Explore the
            presentation of these color combinations in text, patterns, color
            gradients, and various illustrations. Easily copy color codes in
            multiple formats, including HEX, RGB, and HSL or save them for
            later.
          </p>
          <ColorwheelSlider />
          <p className={styles.aboutParagraph}>
            Each color family covers a 30-degree hue range, derived from a
            360-degree color wheel, resulting in 12 distinct color families. Dim
            colors exhibit a lower brightness value, while Moderate colors
            feature a lower saturation value and a medium level of brightness.
            Bright colors, on the other hand, boast a high brightness value.
          </p>
          <ColorHarmonySlider />
          <p className={styles.aboutParagraph}>
            Qovier utilizes the RGB (Red, Green, Blue) format on the color
            wheel, resulting in complementary colors distinct from the RYB (Red,
            Yellow, Blue) and CYM (Cyan, Yellow, Magenta) formats.
          </p>
          <p className={styles.aboutParagraph}>
            Please be aware that certain colors may be trademarked by certain
            companies. If you intend to use a color you find here for branding
            purposes, conduct your own research. All color pairs are randomly
            generated within a specific range, so there is still a chance they
            may result in the same color.
          </p>
        </section>
      </div>

      <div className={styles.divider}>
        <HiChevronDoubleUp className={`bounceAnimation ${styles.arrowUp}`} />
      </div>

      <div className={styles.copyright}>
        <div className={styles.footerbar}>
          <p className={styles.copyrightText}>
            <span>Brought to life with passion and </span> <TbHeartFilled />{' '}
            <span> by </span>
            <a
              className={styles.copyrightLink}
              href="https://github.com/cholis04"
              target="_blank"
              rel="noopener noreferrer"
            >
              cholis04
            </a>
          </p>

          <p className={styles.footerlink}>
            <Link href="/page/privacy-policy">Privacy Policy</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
