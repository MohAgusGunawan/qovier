import Image from 'next/image';

import EmptyPNG from '@/src/assets/images/illustration-empty-collection.png';

import styles from './EmptyCollection.module.css';

const EmptyCollection = () => {
  return (
    <div className={styles.emptyData}>
      <div className={styles.boxImage}>
        <Image src={EmptyPNG} fill sizes="326px" priority alt="" />
      </div>
      <p>You have not saved any color pairs yet</p>
    </div>
  );
};

export default EmptyCollection;
