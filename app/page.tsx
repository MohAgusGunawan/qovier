'use client';

import { useEffect } from 'react';
import { HiChevronDoubleDown } from 'react-icons/hi2';

import { useAppDispatch, useAppSelector } from '@app/redux/hooks';
import { receiveColors } from '@app/redux/features/combinationSlice';

import Header from './blocks/Header/Header';
import FormFilter from './blocks/FormFilter/FormFilter';

import Card from '@app/components/Card/Card';

import { generateCombination } from './utils/generateCombination';

import styles from './page.module.css';

export default function Home() {
  const dispatch = useAppDispatch();
  const combination = useAppSelector((state) => state.combination.value);

  useEffect(() => {
    dispatch(receiveColors(generateCombination()));
  }, [dispatch]);

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
            {combination.map((data, index) => (
              <Card data={data} key={index} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
