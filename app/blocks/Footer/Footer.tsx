import { TbHeartFilled } from 'react-icons/tb';

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
          <p className={styles.aboutParagraph}>
            But keep in mind, some colors may have been registered as a patent.
            If you want to use a color found here as a brand, please do your own
            research. All color pairs are randomly generated based on a certain
            range.
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
