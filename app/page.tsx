import Header from './blocks/Header/Header';
import FormFilter from './blocks/FormFilter/FormFilter';

import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className="wrapper">
        <Header />
        <FormFilter />
      </div>
    </main>
  );
}
