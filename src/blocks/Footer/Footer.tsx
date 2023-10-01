import Link from 'next/link';
import { HiChevronDoubleUp } from 'react-icons/hi2';

import About from '@/src/sections/About/About';

import styles from './Footer.module.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <About />

      <div className={styles.divider}>
        <HiChevronDoubleUp className={`bounceAnimation ${styles.arrowUp}`} />
      </div>

      <div className={styles.copyright}>
        <div className={styles.footerbar}>
          <p className={styles.footerlink}>
            <Link
              href="/page/privacy-policy"
              prefetch={false}
              className={styles.link}
            >
              Privacy Policy
            </Link>
          </p>

          <p className={styles.copyrightText}>Copyright &copy; {year} Qovier</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
