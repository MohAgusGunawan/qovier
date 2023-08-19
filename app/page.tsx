import { HiChevronDoubleDown } from 'react-icons/hi2';

import Header from './blocks/Header/Header';
import FormFilter from './blocks/FormFilter/FormFilter';

import Card from '@app/components/Card/Card';

import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className="wrapper">
        <Header />
        <FormFilter />

        <section className={styles.result} aria-labelledby="heading-result">
          <div className={styles.divider}>
            <HiChevronDoubleDown className={styles.arrowDown} />
          </div>

          <h2 className={styles.title} id="heading-result">
            Result
          </h2>

          <div className={styles.cardContainer}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </section>
      </div>
    </main>
  );
}
