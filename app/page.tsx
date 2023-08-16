import Image from 'next/image';

import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <header>
        <h1 className={styles.headline}>Qovier</h1>
        <p className={styles.paragraph}>
          Generator of beautiful two color combinations, explore color pairs for
          your designs.
        </p>
      </header>
    </main>
  );
}
